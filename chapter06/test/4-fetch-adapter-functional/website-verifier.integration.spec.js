const realNetwork = require('./network-adapter.js');
const webverifier = require('./website-verifier.js');

test('integration test: fetching with callback', async () => {
  const result = await webverifier.isWebsiteAlive(realNetwork);
  expect(result.success).toBe(true);
});
