import Substitute                from "@fluffy-spoon/substitute";
import {PasswordVerifier4}       from "../src/00-password-verifier.v4.ts";
import type {IComplicatedLogger} from "../src/interfaces/complicated-logger.ts";
import {
    describe,
    expect,
    test,
    jest,
}                                from "bun:test";

describe("verifier 4", () => {
    describe("overspecify protected function call", () => {
        test("checkFailedRules is called", () => {
            const pv4 = new PasswordVerifier4(
                [],
                Substitute.for<IComplicatedLogger>(),
            );

            const failedMock = jest.fn(() => []);

            pv4["findFailedRules"] = failedMock;

            pv4.verify("abc");

            expect(failedMock).toHaveBeenCalled();
        });
    });
});
