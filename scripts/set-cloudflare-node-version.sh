#!/usr/bin/env bash
set -euo pipefail

PROJECT_NAME="${1:-BloodDiamondInk}"
NODE_VERSION="${2:-20}"

if ! command -v cf >/dev/null 2>&1; then
  echo "Error: Cloudflare CLI 'cf' is not installed or not on the PATH." >&2
  exit 1
fi

cf pages project variable create \
  --project-name "${PROJECT_NAME}" \
  --env production \
  --var NODE_VERSION=${NODE_VERSION} \
  --overwrite

cf pages project variable create \
  --project-name "${PROJECT_NAME}" \
  --env preview \
  --var NODE_VERSION=${NODE_VERSION} \
  --overwrite

echo "✅ Cloudflare Pages now locked to Node ${NODE_VERSION}.x for both Production and Preview."
