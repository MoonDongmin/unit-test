import {SUNDAY}           from "../001-modular/password-verifier-time00-modular";
import {PasswordVerifier} from "./password-verifier-time01";
import {
    describe,
    expect,
    it,
}                         from "bun:test";
import {MONDAY}           from "./password-verifier-time02";

describe("verifier", () => {
    it("class constructor: on weekends, throw exception", () => {
        const alwaysSunday = () => SUNDAY;

        const verifier = new PasswordVerifier([], alwaysSunday);

        expect(() => verifier.verify("anything"))
            .toThrow("It's the weekend!");
    });
});

describe("factory function te4st", () => {
    const makeFactory = (input: any, dayFn: any) => {
        return new PasswordVerifier(input, dayFn);
    };

    it("should class constructor: on weekends, throw exception", () => {
        const alwaysSunday = () => SUNDAY;

        const verifier = makeFactory([], alwaysSunday);

        expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
    });

    it("should class constructor: on weekends, throw exception", () => {
        const alwaysMonday = () => MONDAY;

        const verifier = makeFactory([], alwaysMonday);

        const result = verifier.verify("anything");

        expect(result.length).toBe(0);
    });
});
