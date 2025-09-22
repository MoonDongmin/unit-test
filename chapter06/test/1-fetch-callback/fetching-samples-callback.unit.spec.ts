import {
    describe,
    test,
    expect,
} from "bun:test";
import {
    processFetchError,
    processFetchSuccess,
} from "../../src/1-fetch-callback/fetching-samples-callback.ts";
import type {
    WebsiteResult,
} from "../../src/0-before/fetching-samples-before.ts";

describe("Website alive checking", () => {
    test("content matches, returns true", (done) => {
        processFetchSuccess("illustrative", (result) => {
            expect(result.success).toBe(true);
            expect(result.status).toBe("ok");
            done();
        });
    });

    test("website content does not match, returns false", (done) => {
        processFetchSuccess("bad content", (result) => {
            expect(result.status).toBe("missing text");
            done();
        });
    });

    test("When fetch fails, returns false", (done) => {
        processFetchError("error text", (result: WebsiteResult) => {
            expect(result.status).toBe("error text");
            done();
        });
    });
});
