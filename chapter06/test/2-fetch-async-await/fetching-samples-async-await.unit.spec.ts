import {
    describe,
    test,
    expect,
} from "bun:test";
import {
    processFetchContent,
    processFetchError,
} from "../../src/2-fetch-async-await/fetching-samples-async-await.ts";

describe("website up check", () => {
    test("on fetch success with good content, returns true", () => {
        const result = processFetchContent("illustrative");
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });

    test("on fetch success with bad content, returns false", () => {
        const result = processFetchContent("text not on site");
        expect(result.success).toBe(false);
        expect(result.status).toBe("missing text");
    });

    test("on fetch fail, throws", () => {
        expect((): never => processFetchError("error text")).toThrowError(
            "error text",
        );
    });
});
