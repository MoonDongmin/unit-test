export const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;

export class PasswordVerifier {
    private rules;
    private timeProvider;

    constructor(rules: any, timeProvider: any) {
        this.rules = rules;
        this.timeProvider = timeProvider;
    }

    verify(input: string): string[] {
        if ([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
            throw new Error("It's the weekend!");
        }
        const errors: string[] = [];

        return errors;
    }
}
