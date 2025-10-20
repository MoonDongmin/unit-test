interface IResult {
    result: boolean;
    input: string;
}

export class PasswordVerifier6 {
    private _rules: ((input: string) => boolean)[];

    private _msg: string = "";

    constructor(rules: ((input: string) => boolean)[]) {
        this._rules = rules;
    }

    getMsg(): string {
        return this._msg;
    }

    verify(inputs: string[]): IResult[] {
        const allResults: IResult[] = inputs.map((input: string) => this.checkSingleInput(input));

        this.setDescription(allResults);

        return allResults;
    }

    private setDescription(results: IResult[]) {
        const failed: IResult[] = results.filter((res: IResult) => !res.result);

        this._msg = `you have ${failed.length} failed rules.`;
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
