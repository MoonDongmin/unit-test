import {
    PasswordVerifier5,
    type IResult,
} from "../src/00-password-verifier.v5.ts";
import {
    expect,
    test,
    describe,
} from "bun:test";

describe("PasswordVerifier5 - Assertion Strategies", () => {
    test("overspecify order and schema", () => {
        const pv5 = new PasswordVerifier5([(input: string) => input.includes("abc")]);

        const results: IResult[] = pv5.verify(["a", "ab", "abc", "abcd"]);

        expect(results).toEqual([
            {
                input: "a",
                result: false,
            },
            {
                input: "ab",
                result: false,
            },
            {
                input: "abc",
                result: true,
            },
            {
                input: "abcd",
                result: true,
            },
        ]);
    });

    test("overspecify order but ignore schema", () => {
        const pv5 = new PasswordVerifier5([(input: string) => input.includes("abc")]);

        const results: IResult[] = pv5.verify(["a", "ab", "abc", "abcd"]);

        expect(results.length).toBe(4);
        expect(results[0].result).toBe(false);
        expect(results[1].result).toBe(false);
        expect(results[2].result).toBe(true);
        expect(results[3].result).toBe(true);
    });

    test("ignore order and schema", () => {
        const pv5 = new PasswordVerifier5([(input: string) => input.includes("abc")]);

        const results: IResult[] = pv5.verify(["a", "ab", "abc", "abcd"]);

        expect(results.length).toBe(4);
        expect(pv5.findResultFor(results, "a")).toBe(false);
        expect(pv5.findResultFor(results, "ab")).toBe(false);
        expect(pv5.findResultFor(results, "abc")).toBe(true);
        expect(pv5.findResultFor(results, "abcd")).toBe(true);
    });
});


