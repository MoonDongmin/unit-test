import {
    describe,
    test,
    expect,
}                     from "bun:test";
import {makeVerifier} from "../../src/02-functional-higher-order-functions/01-password-verifier.ts";

describe("higher order factory functions", () => {
    describe("password verifier", () => {
        test("given logger and passing scenario", () => {
            let logged = "";
            const mockLog = {info: (text: string) => (logged = text)};

            const passVerify = makeVerifier([], mockLog);

            passVerify("any input");

            expect(logged).toMatch(/PASSED/);
        });
    });
});
