import {
  test,
  describe,
  expect,
}                       from "bun:test";
import {verifyPassword} from "../src/verifyPassword.ts";


describe("password verifier", () => {
  test("on weekends, throws exceptions", () => {
    expect(() => verifyPassword("jhGGu78!", [], 0)).toThrowError(
      "It's the weekend!",
    );
  });
});
