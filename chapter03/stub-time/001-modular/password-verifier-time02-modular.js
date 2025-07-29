export const SUNDAY = 0;
export const SATURDAY = 6;

export const Verifier = function (rules, dayOfWeekFn) {
  this.verify = function (input) {
    if ([SATURDAY, SUNDAY].includes(dayOfWeekFn)) {
      throw new Error('It\'s the weekend!');
    }
  }
};

