import {
  test,
  describe,
  it,
} from "bun:test";

// 무엇을 테스트하는가?
test("failing rule, returns error based on rule.reason", () => {
  // ...
});

// 이것이 언제 발생해야 하는가?
test("verifyPassword, returns error based on rule.reason", () => {
  // ...
});

// 그렇다면 어떤 일이 발생해야 하는가?
test("verifyPassword, with a failing rule", () => {
  // ...
});
