import {
    test,
    jest,
    expect,
} from "bun:test";
import {
    isWebsiteAliveWithAsyncAwait,
    isWebsiteAliveWithCallback,
    type WebsiteResult,
} from "../../src/0-before/fetching-samples-before.ts";

jest.setTimeout(10000);

test("NETWORK REQUIRED (callback): correct content, true", (done) => {
    isWebsiteAliveWithCallback((result: WebsiteResult) => {
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
        done();
    });
});

test("async task test (using done)", (done) => {
    // 3초 후에 콜백을 호출하는 비동기 작업
    setTimeout(() => {
        expect(true).toBe(true);
        done();
    }, 3000);
});

test("sync task test", () => {
    const result = 1 + 1;
    expect(result).toBe(2);
});

test("async task test (time for 10 seconds)", (done) => {
    jest.setTimeout(10000);

    setTimeout(() => {
        expect(true).toBe(true);
        done();
    }, 6000);
});

test("NETWORK REQUIRED (await): correct content, true", (done) => {
    isWebsiteAliveWithAsyncAwait().then((result) => {
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
        done();
    });
});

test("NETWORK REQUIRED2 (await): correct content, true", async () => {
    const result = await isWebsiteAliveWithAsyncAwait();
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
});
