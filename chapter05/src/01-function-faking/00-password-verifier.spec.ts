import {makeVerifier} from "./00-password-verifier.ts";
import {
    test,
    expect,
    jest,
}                     from "bun:test";

test("given logger and passing scenario", () => {
    const mockLog = {
        info: jest.fn(),
    };

    const verify = makeVerifier([], mockLog);

    verify("any input");

    expect(mockLog.info).toHaveBeenCalledWith(expect.stringMatching(/PASS/));
});
