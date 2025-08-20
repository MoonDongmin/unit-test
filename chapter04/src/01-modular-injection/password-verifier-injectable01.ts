import type {PasswordRule} from "../00-function-param-injection/password-verifier00.ts";
import {log}               from "../00-function-param-injection/complicated-logger.ts";

interface Logger {
    info(text: string): void;
    debug(text: string): void;
}

interface Log {
    log: Logger;
}

export const originalDependencies: Log = {
    log,
};

let dependencies = {...originalDependencies};

export const resetDependencies = () => {
    dependencies = {...originalDependencies};
};

export const injectDependencies = (fakes: any) => {
    Object.assign(dependencies, fakes);
};

export const verifyPassword = (input: string, rules: PasswordRule[]) => {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => !result.passed);

    if (failed.length === 0) {
        dependencies.log.info("PASSED");
        return true;
    }

    dependencies.log.info("FAIL");
    return false;
};
