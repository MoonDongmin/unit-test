import Substitute, {Arg}         from "@fluffy-spoon/substitute";
import type {IComplicatedLogger} from "../src/interfaces/complicated-logger.ts";
import {PasswordVerifier}        from "../src/PasswordVerifier.ts";
import {
  test,
  describe,
  beforeEach,
}                                from "bun:test";

describe("password verifier", () => {
  let mockLog: IComplicatedLogger;
  beforeEach(() => {
    mockLog = Substitute.for<IComplicatedLogger>();
  });

  test("verify, with logger & passing, calls logger with PASS", () => {
    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify("anything");

    mockLog.info(
      Arg.is((x) => x.includes("PASSED")),
      "verify",
    );
  });
});
