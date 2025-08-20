import type {
    PasswordRule,
    PasswordRuleResult,
} from "./password-verifier00.ts";

// interface Logger {
//     info: (message: string) => void;
// }

type Logger = {
    info: (message: string) => void;
}


// 가짜 로거 함수를 매개변수로 주입
export const verifyPassword2 = (input: string, rules: PasswordRule[], logger: Logger) => {
    const failed: PasswordRuleResult[] = rules
        .map(rule => rule(input))
        .filter(result => !result.passed);

    if (failed.length === 0) {
        logger.info("PASSED");
        return true;
    }

    logger.info("FAILED");
    return false;
};
