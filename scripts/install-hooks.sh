#!/usr/bin/env bash
# scripts/install-hooks.sh
# Installs git hooks from scripts/hooks/ into .git/hooks/
# Run once after cloning the repo.
#
# Usage: bash scripts/install-hooks.sh

set -euo pipefail

HOOKS_DIR="$(git rev-parse --git-dir)/hooks"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/hooks" && pwd)"

echo "[install-hooks] Installing hooks from $SOURCE_DIR → $HOOKS_DIR"

for hook in "$SOURCE_DIR"/*; do
  hook_name="$(basename "$hook")"
  target="$HOOKS_DIR/$hook_name"

  cp "$hook" "$target"
  chmod +x "$target"
  echo "[install-hooks] ✓ Installed: $hook_name"
done

echo "[install-hooks] Done. All hooks installed."
