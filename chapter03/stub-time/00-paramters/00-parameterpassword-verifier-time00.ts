import moment from "moment";

const SUNDAY = 0;
const SATURDAY = 6;

export type PasswordRule = (input: string) => RuleResult;

export interface RuleResult {
    passed: boolean;
    reason?: string;
}

export const verifyPassword =
    (input: string, rules: PasswordRule): RuleResult[] => {
        const dayOfWeek = moment().day();
        if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
            throw Error("It's the weekend!");
        }

        return [];
    };

export const verifyPassword2 =
    (input: string, rules: PasswordRule, currentDay: number): RuleResult[] => {
        if ([SATURDAY, SUNDAY].includes(currentDay)) {
            throw Error("It's the weekend!");
        }
        // 이곳에 다른 코드를 작성

        // 발견한 오류를 반환
        return [];
    };

export const verifyPassword3 =
    (input: string, rules: PasswordRule, getDayFn: () => number): RuleResult[] => {
        const dayOfWeek: number = getDayFn();

        if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
            throw Error("It's the weekend!");
        }
        // 이곳에 다른 코드를 작성

        // 발견한 오류를 반환
        return [];
    };
