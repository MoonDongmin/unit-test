import {
    describe,
    test,
    expect,
}                       from "bun:test";
import {isWebsiteAlive} from "../../src/4-fetch-adapter-functional/website-verifier.ts";

type Result = { ok: boolean, text: string }

const makeStubNetworkWithResult = (fakeResult: Result) => {
    return {
        fetchUrlText: () => {
            return fakeResult;
        },
    };
};

describe("unit test website verifier", () => {
    test("with good content, returns true", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: true,
            text: "illustrative",
        });
        const result = await isWebsiteAlive(stubSyncNetwork);
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });

    test("with bad content, returns false", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: true,
            text: "unexpected content",
        });
        const result = await isWebsiteAlive(stubSyncNetwork);
        expect(result.success).toBe(false);
        expect(result.status).toBe("missing text");
    });

    test("with bad url or network, throws", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: false,
            text: "some error",
        });
        try {
            await isWebsiteAlive(stubSyncNetwork);
        } catch (err: any) {
            expect(err.success).toBe(false);
            expect(err.status).toBe("some error");
        }
    });
});
