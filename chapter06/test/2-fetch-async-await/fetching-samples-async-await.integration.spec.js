const samples = require('./fetching-samples-async-await.js');

test('isWebsiteAlive with real website returns true', async () => {
  const result = await samples.isWebsiteAlive();
  expect(result.success).toBe(true);
  expect(result.status).toBe('ok');
});
