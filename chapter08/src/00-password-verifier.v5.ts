export interface IResult {
    result: boolean;
    input: string;
}

export class PasswordVerifier5 {
    private _rules: ((input: string) => boolean)[];

    constructor(rules: ((input: string) => boolean)[]) {
        this._rules = rules;
    }

    verify(inputs: string[]): IResult[] {
        const failedResults: IResult[] = inputs.map((input: string) => this.checkSingleInput(input));

        return failedResults;
    }

    findResultFor(results: IResult[], input: string): boolean {
        const result = results.find((res: IResult) => res.input === input);

        return result?.result ?? false;
    }

    private checkSingleInput(input: string): IResult {
        const failed: boolean[] = this.findFailedRules(input);

        return {
            input,
            result: failed.length === 0,
        };
    }

    protected findFailedRules(input: string) {
        const failed: boolean[] = this._rules
            .map((rule: (input: string) => boolean) => rule(input))
            .filter((result: boolean) => result === false);

        return failed;
    }
}
