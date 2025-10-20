import type {ILogger} from "./interfaces/logger.ts";

export class PasswordVerifier {
    private _rules: ((input: string) => boolean)[];
    private _logger: ILogger;

    constructor(rules: ((input: string) => boolean)[], logger: ILogger) {
        this._rules = rules;
        this._logger = logger;
    }

    verify(input: string): boolean {
        const failed: boolean[] = this._rules
            .map((rule: (input: string) => boolean) => rule(input))
            .filter((result: boolean) => result === false);

        if (failed.length === 0) {
            this._logger.info("PASSED");
            return true;
        }
        this._logger.info("FAIL");
        return false;
    }
}
