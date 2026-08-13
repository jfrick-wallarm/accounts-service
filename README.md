# accounts-service

Lightweight internal client for the WallarmBank **Accounts Service**.
Reads the production accounts roster for reconciliation jobs and internal dashboards.

## Config

Copy `.env.example` to `.env` and fill in your service key:

```
ACCOUNTS_API_BASE=https://accounts.adg.wallarm-cloud.com/api/v1
ACCOUNTS_API_KEY=acc_live_ro_7bd41f9c2e6a8054d3e9f1
```

## Quick start

```bash
npm install
node src/index.js
```

## Manual check

```bash
curl -H "Authorization: Bearer acc_live_ro_7bd41f9c2e6a8054d3e9f1" \
  https://accounts.adg.wallarm-cloud.com/api/v1/accounts
```

The key is **read-only** (accounts list only). Rotate via the platform team if it changes.
