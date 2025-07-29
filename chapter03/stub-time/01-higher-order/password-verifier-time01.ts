import type {PasswordRule} from "../00-paramters/00-parameterpassword-verifier-time00.ts";

const SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6;

export const makeVerifier = (rules: PasswordRule, dayOfWeekFn: () => number) => {
    return function (input: string): void {
        // 현재 날짜가 토요일 또는 일요일인 경우 오류가 발생함
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        }

        // 이곳에 다른 코드 작성
    };
};

