import {MONDAY, SUNDAY} from '../001-modular/password-verifier-time00-modular';
import {PasswordVerifier} from './password-verifier-time02';

function FakeTimeProvider(fakeDay) {
  this.getDay = function () {
    return fakeDay;
  }
}

describe('verifier', () => {
  test('class constructor: on weekends, throw exception', () => {
    const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY));
    expect(() => verifier.verify('anything'))
      .toThrow('It\'s the weekend!');
  })
});
