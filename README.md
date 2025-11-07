# BloodDiamondInk

## Cloudflare Pages deployment

Cloudflare Pages must build this project with Node.js 20 so that Next.js 14 runs on a tested LTS runtime.

Run the helper script after logging into the Cloudflare CLI:

```bash
scripts/set-cloudflare-node-version.sh
```

The script sets the `NODE_VERSION` project variable to `20` for both the production and preview environments:

```bash
cf pages project variable create \
  --project-name "BloodDiamondInk" \
  --env production \
  --var NODE_VERSION=20 \
  --overwrite

cf pages project variable create \
  --project-name "BloodDiamondInk" \
  --env preview \
  --var NODE_VERSION=20 \
  --overwrite
```

You can pass a custom project name or Node version if required:

```bash
scripts/set-cloudflare-node-version.sh <project-name> <node-version>
```
