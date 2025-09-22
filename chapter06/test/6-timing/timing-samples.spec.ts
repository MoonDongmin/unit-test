import {
    describe,
    beforeEach,
    afterEach,
    test,
    expect,
} from "bun:test";

import * as Samples from "../../src/6-timing/timing-samples.ts";

describe("monkey patching", () => {
    let originalTimeOut: typeof setTimeout;
    beforeEach(() => (originalTimeOut = setTimeout));
    afterEach(() => ((setTimeout as any) = originalTimeOut));

    test("calculate1", () => {
        (setTimeout as any) = (callback: () => void, ms: number) => callback();
        Samples.calculate1(1, 2, (result: number) => {
            expect(result).toBe(3);
        });
    });
});
