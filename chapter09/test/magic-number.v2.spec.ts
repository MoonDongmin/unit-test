import {
  test,
  describe,
  expect,
}                        from "bun:test";
import {verifyPassword2} from "../src/verifyPassword-v2.ts";


describe("verifier2 - dummy object", () => {
  test("on weekends, throws exceptions", () => {
    const SUNDAY = 0,
      NO_RULES: unknown[] = [];

    expect(() => verifyPassword2("anything", NO_RULES, SUNDAY)).toThrowError(
      "It's the weekend!",
    );
  });
});
