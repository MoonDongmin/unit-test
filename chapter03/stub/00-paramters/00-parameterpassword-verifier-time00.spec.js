import moment from 'moment';
import {verifyPassword, verifyPassword3} from './00-parameterpassword-verifier-time00'
import {verifyPassword2} from './00-parameterpassword-verifier-time00'

const SUNDAY = 0;
const SATURDAY = 6;
const MONDAY = 2;


describe('verifier', () => {
  const TODAY = moment().day();

  // 이 테스트는 항상 실행도지만, 아무것도 수행하지 않음
  test('on weekends, throws exceptions', () => {
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
      expect(() => verifyPassword('anything', [])).toThrowError(
        'It\'s the weekend!',
      )
    }
  });

  // 이 테스트는 주말에만 실행됨
  if ([SATURDAY, SUNDAY].includes(TODAY)) {
    expect(() => verifyPassword('anything', [])).toThrowError(
      'It\'s the weekend!',
    )
  }

});

describe('verifier2 - dummy object', () => {
  test('on weekends, throws exceptions', () => {
    expect(() => verifyPassword2('anything', [], SUNDAY)).toThrowError(
      'It\'s the weekend!',
    );
  });
});

describe('verifier3 - dummy function', () => {
  test('on weekends, throws exceptions', () => {
    const alwaysSunday = () => SUNDAY;
    expect(() => verifyPassword3('anything', [], alwaysSunday)).toThrowError(
      'It\'s the weekend!',
    );
  });
});
