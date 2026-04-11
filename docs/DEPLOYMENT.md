# Deployment Guide — Foerderis Platform

## Overview

The Foerderis platform (`apps/web`) is deployed to **Vercel** (Production). The `VERCEL_TOKEN` is stored as a Paperclip Company-Secret and is **never** hard-coded, committed, or written to logs.

---

## Quick Deploy (Agent)

```bash
# Required env vars are auto-injected in Paperclip agent runs.
bash scripts/vercel-deploy.sh
```

The script:
1. Fetches `VERCEL_TOKEN` from Paperclip Secrets at runtime
2. Runs `vercel --prod --token $VERCEL_TOKEN --yes`
3. Inspects the deployment and prints the URL
4. Redacts all token patterns (`vcp_*`) from logs via `sed`
5. Calls `unset VERCEL_TOKEN` before exiting

---

## How Agents Fetch the VERCEL_TOKEN

```bash
SECRETS=$(curl -sS "$PAPERCLIP_API_URL/api/companies/$PAPERCLIP_COMPANY_ID/secrets" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY")

VERCEL_TOKEN=$(echo "$SECRETS" | python3 -c "
import sys, json
secrets = json.load(sys.stdin)
print(next(s['value'] for s in secrets if s['name'] == 'VERCEL_TOKEN'))
")
```

> The token is only ever held in a local shell variable for the duration of the deployment, then immediately `unset`.

---

## Autonomous vs. Approval-Required Operations

| Operation | Autonomous? | Notes |
|---|---|---|
| Deploy to **production** via `vercel --prod` | **needs-approval** | Felix must approve before triggering |
| Deploy to **preview** (`vercel --token ...`) | ✓ Autonomous | For review/staging purposes |
| `vercel rollback` on production | **needs-approval** | Always confirm with Felix |
| `vercel inspect` (read-only) | ✓ Autonomous | Safe at any time |
| Update environment variables in Vercel | **needs-approval** | Could affect live app behavior |

### Requesting Approval for Production Deploy

Before triggering a production deploy, set the issue to `needs-approval` and post a comment:

```
@felix Approval needed: Production deploy for [FRDAA-XXX] — [brief description of change]
```

Then set status to `in_review` and wait for Felix's explicit approval.

---

## Rollback Procedure

If a deployment needs to be reverted:

```bash
# 1. Fetch token (same as above)
VERCEL_TOKEN=$(...)

# 2. List recent deployments to find the rollback target
vercel ls --token "$VERCEL_TOKEN" 2>&1 | sed 's/vcp_[a-zA-Z0-9]*/[REDACTED]/g'

# 3. Roll back to the previous deployment
vercel rollback --token "$VERCEL_TOKEN" 2>&1 | sed 's/vcp_[a-zA-Z0-9]*/[REDACTED]/g'

# 4. Unset token
unset VERCEL_TOKEN
```

> Rollback on production requires approval — see the table above.

---

## Security Rules (Strict)

1. **Token only in Paperclip Secret Store** — never in `.env`, code, or comments
2. **Agents fetch at runtime** — inject into the local shell, use immediately, then `unset`
3. **Log redaction** — always pipe output through `sed 's/vcp_[a-zA-Z0-9]*/[REDACTED]/g'`
4. **Pre-commit hook** — install via `bash scripts/install-hooks.sh` to block accidental token commits

---

## Local Setup (Human Developer)

```bash
# 1. Install git hooks after cloning
bash scripts/install-hooks.sh

# 2. For local preview deploys, get the token from your Vercel account settings
#    (do NOT use the production VERCEL_TOKEN from Paperclip)
vercel --token <your-personal-token>
```

---

## CI / GitHub Actions

Currently, deployments are triggered by agents via the `scripts/vercel-deploy.sh` script. There is no automated GitHub Actions deployment step — all Vercel deploys go through the Paperclip agent workflow.

If a GitHub Actions deployment step is added in the future, inject `VERCEL_TOKEN` as a GitHub Actions secret — **never** hard-code it in the workflow YAML.
