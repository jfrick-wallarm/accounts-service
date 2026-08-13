const cfg = require('../config');

async function request(path, opts = {}) {
  const res = await fetch(`${cfg.baseUrl}${path}`, {
    ...opts,
    headers: { Authorization: `Bearer ${cfg.apiKey}`, ...(opts.headers || {}) },
  });
  if (!res.ok) throw new Error(`${opts.method || 'GET'} ${path} -> ${res.status}`);
  return res.json();
}

module.exports = {
  listAccounts: (q = '') => request(`/accounts${q ? `?search=${encodeURIComponent(q)}` : ''}`),
  getAccount: (id) => request(`/accounts/${id}`),
  health: () => request('/health'),
};
