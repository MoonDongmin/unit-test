import {
    describe,
    it,
    expect,
}               from "bun:test";
import {isName} from "../src/isName.ts";

describe("isName", () => {
    const namesToTest = ["firstOnly", "first second", ""];

    it("correctly finds out if it is a name", () => {
        namesToTest.forEach((name: string) => {
            const result = isName(name);

            if (name.includes(" ")) {
                expect(result).toBe(true);
            } else {
                expect(result).toBe(false);
            }
        });
    });

    it("should be isName success test", () => {
        const result = isName("first second");
        expect(result).toBeTruthy();
    });

    it("should be isName false test", () => {
        const result = isName("firstOnly");
        expect(result).toBeFalsy();
    });
});
