import {
    SATURDAY,
    SUNDAY,
}                          from "../001-modular/password-verifier-time00-modular";
import type {PasswordRule} from "../00-paramters/00-parameterpassword-verifier-time00.ts";

export class PasswordVerifier {
    private rules: PasswordRule[];
    private dayOfWeek: () => number;

    constructor(rules: PasswordRule[], dayOfWeekFn: () => number) {
        this.rules = rules;
        this.dayOfWeek = dayOfWeekFn;
    }

    verify(input: string): string[] {
        if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
            throw new Error("It's the weekend!");
        }
        const errors: string[] = [];

        this.rules.forEach((rule: PasswordRule) => {
            const result = rule(input);
            if (!result.passed) errors.push(`error ${result.reason}`);
        });

        return errors;
    }
}
