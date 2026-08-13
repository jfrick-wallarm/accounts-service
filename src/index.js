// Accounts Service client entrypoint.
const client = require('./client');

async function main() {
  await client.health();
  const accounts = await client.listAccounts();
  console.log(`fetched ${accounts.length ?? 0} accounts`);
  console.log(JSON.stringify(accounts, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
