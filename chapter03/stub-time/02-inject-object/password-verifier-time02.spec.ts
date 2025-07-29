import {
    MONDAY,
    SUNDAY,
} from "../001-modular/password-verifier-time00-modular";
import {PasswordVerifier} from "./password-verifier-time01";
import {
    describe,
    expect,
    test,
} from "bun:test";

describe("refactored with constructor", () => {
    const makeVerifier = (rules, dayFn) => {
        return new PasswordVerifier(rules, dayFn);
    };

    test("class constructor: on weekends, throw exception", () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = makeVerifier([], alwaysSunday);
        expect(() => verifier.verify("anything"))
            .toThrow("It's the weekend!");
    });

    test("class constructor: on weekends, with no rules, passes", () => {
        const alwaysMonday = () => MONDAY;
        const verifier = makeVerifier([], alwaysMonday);
        const result = verifier.verify("anything");
        expect(result.length).toBe(0);
    });
});
