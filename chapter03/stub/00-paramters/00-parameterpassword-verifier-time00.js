import {moment} from 'moment';

const SUNDAY = 0;
const SATURDAY = 6;

export const verifyPassword = (input, rules) => {
  const dayOfWeek = moment().day();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error('It\'s the weekend!');
  }

  return [];
};

export const verifyPassword2 = (input, rules, currentDay) => {
  if ([SATURDAY, SUNDAY].includes(currentDay)) {
    throw Error('It\'s the weekend!');
  }
  // 이곳에 다른 코드를 작성

  // 발견한 오류를 반환
  return [];
};

export const verifyPassword3 = (input, rules, getDayFn) => {
  const dayOfWeek = getDayFn();

  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error('It\'s the weekend!');
  }
  // 이곳에 다른 코드를 작성

  // 발견한 오류를 반환
  return [];
};




