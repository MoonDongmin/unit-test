import type {TimeProviderInterface} from "./time-provider-interface.ts";

export const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;

export class PasswordVerifier {
    private _timeProvider: TimeProviderInterface;

    constructor(rules: any[], timeProvider: TimeProviderInterface) {
        this._timeProvider = timeProvider;
    }

    verify(input: string): string[] {
        const isWeekend = [SUNDAY, SATURDAY]
            .filter(x => x === this._timeProvider.getDay())
            .length > 0;

        if (isWeekend) {
            throw new Error("It's the weekend!");
        }

        // 더 많은 로직...
        return [];
    }
}
