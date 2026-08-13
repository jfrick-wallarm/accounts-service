require('dotenv').config();
module.exports = {
  baseUrl: process.env.ACCOUNTS_API_BASE || 'https://accounts.adg.wallarm-cloud.com/api/v1',
  apiKey: process.env.ACCOUNTS_API_KEY,
  env: process.env.NODE_ENV || 'development',
  timeoutMs: Number(process.env.HTTP_TIMEOUT_MS || 8000),
};
