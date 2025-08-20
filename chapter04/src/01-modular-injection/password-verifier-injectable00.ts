import {getLogLevel} from "./configuration-service.ts";
import type {
    PasswordRule,
    PasswordRuleResult,
}                    from "../00-function-param-injection/password-verifier00.ts";
import {
    debug,
    info,
}                    from "./complicated-logger.ts";

type Log = (text: string) => void;

const log: Log = (text: string) => {
    if (getLogLevel() === "info") {
        info(text);
    }

    if (getLogLevel() === "debug") {
        debug(text);
    }
};

export const verifyPassword = (input: string, rules: PasswordRule[]) => {
    const failed = rules
        .map((rule: PasswordRule) => rule(input))
        .filter((result: PasswordRuleResult) => !result.passed);

    if (failed.length === 0) {
        log("PASSED");
        return true;
    }

    log("FAIL");
    return false;
};

