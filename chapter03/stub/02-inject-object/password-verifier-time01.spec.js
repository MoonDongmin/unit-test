import {SUNDAY} from '../001-modular/password-verifier-time00-modular';
import {PasswordVerifier} from './password-verifier-time01';

describe('verifier', () => {
  test('class constructor: on weekends, throw exception', () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = new PasswordVerifier([], alwaysSunday);
    expect(() => verifier.verify('anything'))
      .toThrowError('It\'s the weekend!');
  })

});
