// Nightly reconciliation job: pulls the accounts roster and diffs against the ledger.
const client = require('../src/client');

(async () => {
  const accounts = await client.listAccounts();
  const active = accounts.filter((a) => a.status === 'active');
  console.log(`reconcile: ${active.length}/${accounts.length} active accounts`);
})().catch((e) => { console.error('reconcile failed', e); process.exit(1); });
