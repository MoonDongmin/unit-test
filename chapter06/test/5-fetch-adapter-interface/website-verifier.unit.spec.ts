import {
    describe,
    test,
    expect,
} from "bun:test";
import Substitute, {Arg} from "@fluffy-spoon/substitute";
import type {
    INetworkAdapter,
    NetworkAdapterFetchResults,
} from "../../src/5-fetch-adapter-interface/INetworkAdapter.ts";
import {WebsiteVerifier} from "../../src/5-fetch-adapter-interface/website-verifier.ts";

const makeStubNetworkWithResult = (
    fakeResult: NetworkAdapterFetchResults,
): INetworkAdapter => {
    // mock객체 생성
    const stubNetwork = Substitute.for<INetworkAdapter>();
    // 네트워크 접속 없이 무조건 fakeResult만 던지게 만듬
    stubNetwork.fetchUrlText(Arg.any()).returns(Promise.resolve(fakeResult));
    return stubNetwork;
};

describe("unit test website verifier", () => {
    test("with good content, returns true", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: true,
            text: "illustrative",
        });
        const webVerifier = new WebsiteVerifier(stubSyncNetwork);

        const result = await webVerifier.isWebsiteAlive();
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });

    test("with bad content, returns false", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: true,
            text: "unexpected content",
        });
        const webVerifier = new WebsiteVerifier(stubSyncNetwork);

        const result = await webVerifier.isWebsiteAlive();
        expect(result.success).toBe(false);
        expect(result.status).toBe("missing text");
    });
});
