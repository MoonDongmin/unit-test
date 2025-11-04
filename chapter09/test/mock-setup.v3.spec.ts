import Substitute, {Arg}         from "@fluffy-spoon/substitute";
import {PasswordVerifier}        from "../src/PasswordVerifier.ts";
import type {IComplicatedLogger} from "../src/interfaces/complicated-logger.ts";
import {
  test,
  describe,
}                                from "bun:test";

const makeMockLogger = () => {
  return Substitute.for<IComplicatedLogger>(); // 테스트 내에서 목 초기화
};

describe("password verifier", () => {
  test("verify, with logger & passing, calls logger with PASS", () => {
    const mockLog = makeMockLogger(); // 목 초기화를 위한 헬퍼 함수 사용

    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify("anything");

    mockLog.received().info(
      Arg.is((x) => x.includes("PASSED")),
      "verify",
    );
  });
});
