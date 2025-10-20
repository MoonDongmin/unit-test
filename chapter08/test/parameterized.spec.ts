import {
    describe,
    expect,
    test,
} from "bun:test";

const sum: (numbers: string) => number = (numbers: string) => {
    if (numbers.length > 0) {
        return parseInt(numbers);
    }

    return 0;
};

describe("sum with regular tests", () => {
    test("sum number 1", () => {
        const result: number = sum("1");

        expect(result).toBe(1);
    });

    test("sum number 2", () => {
        const result: number = sum("2");

        expect(result).toBe(2);
    });
});

describe("sum with parameterized tests", () => {
    test.each([
        ["1", 1],
        ["2", 2],
    ])("add %s, returns that number", (input: string, expected: number) => {
        const result: number = sum(input);

        expect(result).toBe(expected);
    });
});
