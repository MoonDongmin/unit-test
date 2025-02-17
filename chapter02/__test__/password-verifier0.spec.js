import {verifyPassword} from '../password-verifier0';
import * as test from 'node:test';

test('badly named test', () => {
  const fakeRule = input =>
    ({passed: false, reason: 'fake reason'});
  const errors = verifyPassword('any value', [fakeRule]);

  expect(errors[0]).toMatch(`fake reason`);
})

test('verifyPassword, given a failing rule, returns errors', () => {
  const fakeRule = input =>
    ({passed: false, reason: 'fake reason'});
  const errors = verifyPassword('any value', [fakeRule]);

  expect(errors[0]).toContain(`fake reason`);
})

describe('verifyPassword', () => {
  test('given a failing rule, returns errors', () => {
    const fakeRule = input =>
      ({passed: false, reason: 'fake reason'});

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toContain(`fake reason`);
  })
});

describe('verifyPassword', () => {
  describe('with a failing rule', () => {
    test('given a failing rule, returns errors', () => {
      const fakeRule = input =>
        ({passed: false, reason: 'fake reason'});

      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain(`fake reason`);
    })
  });
});

describe('verifyPassword', () => {
  describe('with a failing rule', () => {
    const fakeRule = input =>
      ({passed: false, reason: 'fake reason'});

    test('given a failing rule, returns errors', () => {

      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain(`fake reason`);
    })
  });
});

describe('verifyPassword', () => {
  describe('with a failing rule', () => {
    it('returns errors', () => {
      const fakeRule = () =>
        ({passed: false, reason: 'fake reason'});

      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain(`fake reason`);
    });
  });
});
