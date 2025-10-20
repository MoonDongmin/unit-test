import {PasswordVerifier} from "../src/00-password-verifier.v1.ts";
import {
    describe,
    it,
    expect,
    jest,
}                         from "bun:test";

describe("password verifier 1", () => {
    it("passes with zero rules", () => {
        const verifier = new PasswordVerifier([], {info: jest.fn()});
        const result: boolean = verifier.verify("any input");

        expect(result).toBe(true);
    });

    it("fails with single failing rule", () => {
        const failingRule: (input: string) => boolean = (input: string) => false;

        const verifier = new PasswordVerifier([failingRule], {info: jest.fn()});

        const result = verifier.verify("any input");

        expect(result).toBe(false);
    });
});
