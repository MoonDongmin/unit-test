import Substitute                from "@fluffy-spoon/substitute";
import type {IComplicatedLogger} from "../src/interfaces/complicated-logger.ts";
import {PasswordVerifier2}       from "../src/00-password-verifier.v2.ts";
import {
    describe,
    it,
    expect,
}                                from "bun:test";

describe("password verifier (ctor change)", () => {
    const makeFakeLogger = () => {
        return Substitute.for<IComplicatedLogger>();
    };

    const makePasswordVerifier = (
        rules: ((input: string) => boolean)[],
        fakeLogger: IComplicatedLogger = makeFakeLogger(),
    ) => {
        return new PasswordVerifier2(rules, fakeLogger);
    };

    it("passes with zero rules", () => {
        const verifier: PasswordVerifier2 = makePasswordVerifier([]);

        const result: boolean = verifier.verify("any input");

        expect(result).toBe(true);
    });

    it("fails with single failing rule", () => {
        const failingRule: (input: string) => boolean = (input: string) => false;
        const verifier: PasswordVerifier2 = makePasswordVerifier([failingRule]);

        const result = verifier.verify("any input");

        expect(result).toBe(false);
    });
});
