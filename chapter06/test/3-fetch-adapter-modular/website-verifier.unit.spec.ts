import {
    beforeEach,
    describe,
    expect,
    test,
    spyOn,
}                          from "bun:test";
import {isWebsiteAlive}    from "../../src/3-fetch-adapter-modular/website-verifier";
import * as networkAdapter from "../../src/3-fetch-adapter-modular/network-adapter";

describe("unit test website verifier", () => {
    let mockFetchUrlText: any;

    beforeEach(() => {
        mockFetchUrlText = spyOn(networkAdapter, "fetchUrlText");
    });

    test("with good content, returns true", async () => {
        mockFetchUrlText.mockResolvedValue({
            ok: true,
            text: "illustrative",
        });

        const result = await isWebsiteAlive();
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });

    test("with bad content, returns false", async () => {
        // mock 반환값 설정 - 성공적인 응답이지만 기대하는 텍스트가 없음
        mockFetchUrlText.mockResolvedValue({
            ok: true,
            text: "<span>hello world</span>",
        });

        const result = await isWebsiteAlive();
        expect(result.success).toBe(false);
        expect(result.status).toBe("missing text");
    });
});
