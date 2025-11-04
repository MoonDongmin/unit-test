import Substitute, {Arg}         from "@fluffy-spoon/substitute";
import type {IComplicatedLogger} from "../src/interfaces/complicated-logger.ts";
import {PasswordVerifier}        from "../src/PasswordVerifier.ts";
import {
  test,
  describe,
}                                from "bun:test";

describe("password verifier", () => {
  test("verify, with logger & passing, calls logger with PASS", () => {
    const mockLog = Substitute.for<IComplicatedLogger>(); // 테스트 내에서 목 초기화

    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify("anything");

    mockLog.received().info(
      Arg.is((x) => x.includes("PASSED")),
      "verify",
    );
  });
});
