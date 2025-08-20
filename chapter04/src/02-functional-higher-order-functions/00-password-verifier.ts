import type {PasswordRule} from "../00-function-param-injection/password-verifier00.ts";
import _                   from "lodash";

/**
 * curry 함수는 함수를 부분적으로 적용(partial application) 해서, 하나의 인자씩 순차적으로 받아 최종적으로 실행되도록 만드는 함수
 * 즉, 여러 개의 인자를 받는 함수를 하나씩 또는 몇 개씩 나눠서 호출할 수 있게 만들어주는 고차 함수
 */
export const verifyPassword3 = _.curry((rules: PasswordRule[], logger: any, input: string) => {
    const failed = rules
        .map(rule => rule(input))
        .filter(result => !result.passed);

    if (failed.length === 0) {
        logger.info("PASSED");
        return true;
    }
    logger.info("FAIL");
    return false;
});
