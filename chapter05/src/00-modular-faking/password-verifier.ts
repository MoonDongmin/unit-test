import {getLogLevel} from "./configuration-service.ts";
import {
    debug,
    info,
}                    from "./complicated-logger.ts";

export interface PasswordRuleResult {
    passed: boolean;
    reason: string;
}

export type PasswordRule = (input: string) => PasswordRuleResult;


const log = (text: string) => {
    if (getLogLevel() === "info") {
        info(text);
    }
    if (getLogLevel() === "debug") {
        debug(text);
    }
};

export const verifyPassword = (input: string, rules: PasswordRule[]) => {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => !result.passed);

    if (failed.length === 0) {
        log("PASSED");
        return true;
    }
    log("FAIL");
    return false;
};
