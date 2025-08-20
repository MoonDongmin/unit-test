import {
    describe,
    expect,
    it,
    afterEach,
} from "bun:test";
import {
    injectDependencies,
    resetDependencies,
    verifyPassword,
} from "../../src/01-modular-injection/password-verifier-injectable01.ts";

describe("password verifier", () => {
    afterEach(resetDependencies);

    describe("given logger and passing scenario", () => {
        it("calls the logger with PASS", () => {
            let logged = "";
            const mockLog = {info: (text: string) => (logged = text)};
            injectDependencies({log: mockLog});

            verifyPassword("anything", []);

            expect(logged).toMatch(/PASSED/);
        });
    });
});
