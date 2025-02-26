export const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;

export class PasswordVerifier {
  constructor(rules, timeProvider) {
    this.rules = rules;
    this.timeProvider = timeProvider;
  }

  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
      throw new Error('It\'s the weekend!');
    }
    const errors = [];

    return errors;
  }
}
