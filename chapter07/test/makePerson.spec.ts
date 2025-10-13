import {
    describe,
    it,
    expect,
} from "bun:test";
import {
    makePerson,
    type MakePersonResult,
} from "../src/makePerson.ts";

describe("makePerson", () => {
    it("creates person given passed in values", () => {
        const result: MakePersonResult = makePerson("name", 1);
        expect(result.name).toBe("name");
        expect(result.age).toBe(1);
    });
});
