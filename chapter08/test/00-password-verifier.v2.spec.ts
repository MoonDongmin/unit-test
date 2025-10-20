import {PasswordVerifier} from "../src/00-password-verifier.v1.ts";
import type {ILogger}     from "../src/interfaces/logger.ts";
import {
    describe,
    it,
    expect,
    jest,
}                         from "bun:test";

describe("password verifier 1", () => {
    const makeFakeLogger = () => {
        return {info: jest.fn()};
    };

    const makePasswordVerifier = (
        rules: ((input: string) => boolean)[],
        fakeLogger: ILogger = makeFakeLogger(),
    ) => {
        return new PasswordVerifier(rules, fakeLogger);
    };

    it("passes with zero rules", () => {
        const verifier: PasswordVerifier = makePasswordVerifier([]);

        const result: boolean = verifier.verify("any input");

        expect(result).toBe(true);
    });
});
