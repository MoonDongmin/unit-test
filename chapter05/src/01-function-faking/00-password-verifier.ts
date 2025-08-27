import type {PasswordRule} from "../00-modular-faking/password-verifier.ts";

export const makeVerifier = (rules: PasswordRule[], logger: any) => {
    return (input: string) => {
        const failed = rules
            .map((rule) => rule(input))
            .filter((result) => !result.passed);

        console.log(failed);
        if (failed.length === 0) {
            logger.info("PASSED");
            return true;
        }

        logger.info("FAIL");
        return false;
    };
};
