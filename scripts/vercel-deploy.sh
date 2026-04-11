#!/usr/bin/env bash
# scripts/vercel-deploy.sh
# Deploys the Foerderis platform to Vercel production.
# VERCEL_TOKEN is fetched at runtime from Paperclip Company-Secrets — never stored in code or logs.
#
# Usage:
#   PAPERCLIP_API_URL=... PAPERCLIP_COMPANY_ID=... PAPERCLIP_API_KEY=... bash scripts/vercel-deploy.sh [--app <app-name>]
#
# Requirements:
#   - curl, vercel CLI (npm i -g vercel), python3 (for secret fetch)
#   - Paperclip env vars set (injected automatically in agent runs)

set -euo pipefail

APP_DIR="${APP_DIR:-apps/web}"

# ── 1. Validate required env vars ───────────────────────────────────────────
for var in PAPERCLIP_API_URL PAPERCLIP_COMPANY_ID PAPERCLIP_API_KEY; do
  if [[ -z "${!var:-}" ]]; then
    echo "[ERROR] Required env var '$var' is not set." >&2
    exit 1
  fi
done

# ── 2. Fetch VERCEL_TOKEN from Paperclip Secrets at runtime ─────────────────
echo "[deploy] Fetching VERCEL_TOKEN from Paperclip Secrets..."

SECRETS_JSON=$(curl -sS \
  "$PAPERCLIP_API_URL/api/companies/$PAPERCLIP_COMPANY_ID/secrets" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY")

VERCEL_TOKEN=$(echo "$SECRETS_JSON" | python3 -c "
import sys, json
secrets = json.load(sys.stdin)
match = next((s['value'] for s in secrets if s['name'] == 'VERCEL_TOKEN'), None)
if not match:
    raise SystemExit('[ERROR] VERCEL_TOKEN not found in Paperclip Secrets')
print(match)
")
export VERCEL_TOKEN

echo "[deploy] Token fetched. Starting deployment..."

# ── Helper: redact token from any output ───────────────────────────────────
# Pipes stdout/stderr through sed to replace token patterns before printing.
# The pattern vcp_[a-zA-Z0-9]* covers Vercel's token format.
redact() {
  sed 's/vcp_[a-zA-Z0-9]*/[REDACTED]/g'
}

# ── 3. Deploy to Vercel production ──────────────────────────────────────────
echo "[deploy] Running: vercel --prod (output redacted)"

DEPLOY_OUTPUT=$(vercel --prod --token "$VERCEL_TOKEN" --yes 2>&1 | redact; exit "${PIPESTATUS[0]}")
echo "$DEPLOY_OUTPUT"

# Extract the deployment URL from the output
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -E 'https://[a-z0-9-]+\.vercel\.app' | tail -1 | tr -d '[:space:]' || true)

# ── 4. Inspect deployment ────────────────────────────────────────────────────
if [[ -n "$DEPLOY_URL" ]]; then
  echo ""
  echo "[deploy] Inspecting deployment at: $DEPLOY_URL"
  vercel inspect "$DEPLOY_URL" --token "$VERCEL_TOKEN" 2>&1 | redact || true
  echo ""
  echo "[deploy] ✓ Deployment successful: $DEPLOY_URL"
else
  echo "[deploy] ✓ Deployment completed (URL not parsed from output)"
fi

# ── 5. Cleanup: unset token from env ────────────────────────────────────────
unset VERCEL_TOKEN
echo "[deploy] Token unset from environment."
