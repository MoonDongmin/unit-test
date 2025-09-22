const samples = require('./fetching-samples-callback.js');

test('isWebsiteAlive with real website returns true', (done) => {
  samples.isWebsiteAlive((result) => {
    expect(result.success).toBe(true);
    done();
  });
});
