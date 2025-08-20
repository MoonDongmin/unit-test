import type {PasswordRule} from "../00-function-param-injection/password-verifier00.ts";

export const makeVerifier = (rules: PasswordRule[], logger: any) => {
    return (input: string) => {
        const failed = rules
            .map((rule) => rule(input))
            .filter((result) => result.passed === false);

        if (failed.length === 0) {
            logger.info("PASSED");
            return true;
        }

        logger.info("FAIL");
        return false;
    };
};

