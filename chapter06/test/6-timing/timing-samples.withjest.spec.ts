const Samples = require('./timing-samples.js');

describe('calculate1 - with jest', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.clearAllTimers();
  });

  test('fake timeout with callback', () => {
    Samples.calculate1(1, 2, (result) => {
      expect(result).toBe(3);
    });
    jest.advanceTimersToNextTimer();
  });
});
