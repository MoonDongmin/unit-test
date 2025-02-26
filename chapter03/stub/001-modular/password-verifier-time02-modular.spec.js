import {SUNDAY} from './password-verifier-time00-modular';
import {Verifier} from './password-verifier-time02-modular';

test('constructor function: on weekends, throws exception', () => {
  const alwaysSunday = () => SUNDAY;
  const verifier = new Verifier([], alwaysSunday());
  expect(() => verifier.verify('anything'))
    .toThrowError('It\'s the weekend!');
})
