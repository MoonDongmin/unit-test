import {
    MONDAY,
    SUNDAY,
}                              from "../001-modular/password-verifier-time00-modular";
import {TimeProviderInterface} from "./time-provider-interface";
import {PasswordVerifier}      from "./password-verifier-time03";

class FakeTimeProvider implements TimeProviderInterface {
    fakeDay: number;

    getDay(): number {
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
