import type {IComplicatedLogger} from "./interfaces/complicated-logger";

export class PasswordVerifier2 {
    private _rules: ((input: string) => boolean)[];
    private _logger: IComplicatedLogger;

    constructor(rules: ((input: string) => boolean)[], logger: IComplicatedLogger) {
        this._rules = rules;
        this._logger = logger;
    }

    verify(input: string): boolean {
        const failed: boolean[] = this._rules
            .map((rule: (input: string) => boolean) => rule(input))
            .filter((result) => result === false);

        if (failed.length === 0) {
            this._logger.info("PASSED");
            return true;
        }
        this._logger.info("FAIL");
        return false;
    }
}
