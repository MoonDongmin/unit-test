import { describe, expect, it, test } from "bun:test";

import { verifyPassword } from "./password-verifier0.ts";

// 예제 2-3
test("badly named test", () => {
  const fakeRule = (input: string) => ({
    passed: false,
    reason: "fake reason",
  });

  const errors = verifyPassword("any value", [fakeRule]);
  expect(errors[0]).toMatch("fake reason");
});

// 예제 2-5
test("verifyPassword, given a failing rule, returns errors", () => {
  const fakeRule = (input: string) => ({
    passed: false,
    reason: "fake reason",
  });

  const errors = verifyPassword("any value", [fakeRule]);

  expect(errors[0]).toContain("fake reason");
});

// 예제 2-6
describe("verifyPassword", () => {
  test("given a failing rule, returns errors", () => {
    const fakeRule = (input: string) => ({ passed: false, reason: input });

    const errors = verifyPassword("any value", [fakeRule]);

    expect(errors[0]).toContain("fake reason");
  });
});

// 예제 2-7
describe("verifyPassword", () => {
  describe("with a failing rule", () => {
    test("returns errors", () => {
      const fakeRule = () => ({
        passed: false,
        reason: "fake reason",
      });

      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toContain("fake reason");
    });
  });
});

// 예제 2-8
describe("verifyPassword", () => {
  describe("with a failing rule", () => {
    const fakeRule = () => ({
      passed: false,
      reason: "fake reason",
    });

    test("returns errors", () => {
      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toContain("fake reason");
    });
  });
});

// 예제 2-9
describe("verifyPassword", () => {
  describe("with a failing rule", () => {
    it("returns errors", () => {
      const fakeRule = () => ({
        passed: false,
        reason: "fake reason",
      });

      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toContain("fake reason");
    });
  });
});
