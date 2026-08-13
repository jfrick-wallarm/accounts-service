// Minimal client for the internal Accounts Service.
// Pulls the production accounts roster for the nightly reconciliation job.
require('dotenv').config();

const BASE = process.env.ACCOUNTS_API_BASE || 'https://accounts.adg.wallarm-cloud.com/api/v1';
const KEY = process.env.ACCOUNTS_API_KEY;

async function listAccounts() {
  const res = await fetch(`${BASE}/accounts`, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  if (!res.ok) throw new Error(`accounts fetch failed: ${res.status}`);
  return res.json();
}

listAccounts()
  .then((r) => console.log(JSON.stringify(r, null, 2)))
  .catch((e) => { console.error(e); process.exit(1); });
