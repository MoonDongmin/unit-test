import {
    describe,
    it,
    expect,
}                     from "bun:test";
import {makeGreeting} from "../src/trust-more.ts";

describe("makeGreeting", () => {
    it("returns correct greeting for name", () => {
        const result = makeGreeting("abc");

        // 하드코딩된 값을 사용
        expect(result).toBe("hello abc");
    });
});
