import {
    MONDAY,
    SUNDAY,
}                                   from "../001-modular/password-verifier-time00-modular";
import {PasswordVerifier}           from "./password-verifier-time03";
import type {TimeProviderInterface} from "./time-provider-interface.ts";
import {
    describe,
    expect,
    test,
}                                   from "bun:test";

class FakeTimeProvider implements TimeProviderInterface {
    public fakeDay?: number;

    getDay(): number | undefined {
        return this.fakeDay;
    }
}

describe("verifier", () => {
    test("on weekends, throw exception", () => {
        const subTimeProvider = new FakeTimeProvider();
        subTimeProvider.fakeDay = SUNDAY;
        const verifier = new PasswordVerifier([], subTimeProvider);

        expect(() => verifier.verify("anything"))
            .toThrow("It's the weekend!");
    });
});
