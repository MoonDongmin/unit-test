import type {IComplicatedLogger} from "./interfaces/complicated-logger";
import {PasswordVerifier}        from "./00-password-verifier";
import {
    describe,
    test,
    expect,
}                                from "bun:test";
import {mock}                    from "jest-mock-extended";

describe("working with long interfaces", () => {
    describe("password verifier", () => {
        test("verify, w logger & passing, calls logger with PASS", () => {
            // const mockLog: IComplicatedLogger = {
            //     info: mock(),
            //     warn: mock(),
            //     debug: mock(),
            //     error: mock(),
            // };

            const mockLog = mock<IComplicatedLogger>();

            const verifier = new PasswordVerifier([], mockLog);
            verifier.verify("anything");

            expect(mockLog.info).toHaveBeenCalledWith(
                expect.stringMatching(/PASSED/),
                expect.stringMatching(/verify/),
            );
        });
    });
});
