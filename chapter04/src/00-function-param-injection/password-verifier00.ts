import {log} from "./complicated-logger.ts";

export interface PasswordRuleResult {
    passed: boolean;
    reason: string;
}

// 예제 2-2
export type PasswordRule = (input: string) => PasswordRuleResult;

const verifyPassword = (input: string, rules: PasswordRule[]) => {
    const failed = rules
        .map(rule => rule(input))
        .filter(result => result.passed === false);

    if (failed.length === 0) {
        // 기존 의존성 주입 방식으로는 테스트 할 수 없음
        log.info("PASSED");
        return true;
    }

    // 기존 의존성 주입 방식으로는 테스트할 수 없음
    log.info("PASSED");
    return false;
};
