import {
    describe,
    beforeEach,
    test,
    expect,
}                   from "bun:test";
import * as Samples from "../../src/6-timing/timing-samples.ts";

describe("calculate with intervals", () => {

    test("calculate, incr input/output, calculates correctly", async () => {
        let xInput = 1;
        let yInput = 2;
        const inputFn = () => ({
            x: xInput++,
            y: yInput++,
        }); // 콜백 수를 검증하기 위해 변수를 증가

        const results: number[] = [];
        Samples.calculate2(inputFn, (result: number): number => results.push(result));

        await new Promise((res) => setTimeout(res, 2200));


        expect(results[0]).toBe(3);
        expect(results[1]).toBe(5);
    });
});
