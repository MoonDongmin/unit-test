import { makeVerifier } from './password-verifier-time01';
import { describe, expect, it, test } from "bun:test";

const SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6;

describe('verifier', () => {
  test('factory method: on weekends, throws exceptions', () => {
    const alwaysSunday = () => SUNDAY;
    // @ts-ignore
    const verifyPassword = makeVerifier([], alwaysSunday);

    expect(() => verifyPassword('anything')).toThrow('It\'s the weekend!');
  })

});

