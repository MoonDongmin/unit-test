import {inject, SATURDAY, verifyPassword} from './password-verifier-time00-modular';

const injectData = (newDay) => {
  const reset = inject({
    moment: function () {
      // 현재 moment.js 모듈의 API를 위조
      return {
        day: () => newDay,
      };
    },
  });
  return reset;
};

describe('verifyPassword', () => {
  describe('when its the weekend', () => {
    it('throws an error', () => {
      const reset = injectData(SATURDAY);

      expect(() => verifyPassword('any input'))
        .toThrowError('It\'s the weekend!');

      reset();
    });
  });
});
 
