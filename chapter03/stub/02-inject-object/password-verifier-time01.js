import {SATURDAY, SUNDAY} from '../001-modular/password-verifier-time00-modular';

export class PasswordVerifier {
  constructor(rules, dayOfWeekFn) {
    this.rules = rules;
    this.dayOfWeek = dayOfWeekFn;
  }

  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
      throw new Error('It\'s the weekend!');
    }
    const errors = [];

    return errors;
  }
}
