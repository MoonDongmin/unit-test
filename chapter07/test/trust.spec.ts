import {
    describe,
    it,
    expect,
}                     from "bun:test";
import {makeGreeting} from "../src/trust.ts";

describe("makeGreeting", () => {
    it("returns correct greeting for name", () => {
        const name = "abc";
        const result: string = makeGreeting(name);

        expect(result).toBe("hello" + name);
    });
});
