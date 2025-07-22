import type { PasswordRule } from "./password-verifier0.ts";

// 예제 2-10
export class PasswordVerifier1 {
  private readonly rules: Array<PasswordRule>;

  constructor() {
    this.rules = [];
  }

  addRule(rule: PasswordRule): void {
    this.rules.push(rule);
  }

  verify(input: string): string[] {
    // // 예제 2-25
    if (this.rules.length === 0) {
      throw new Error("There are no rules configured");
    }

    const errors: Array<string> = [];
    this.rules.forEach((rule) => {
      const result = rule(input);
      if (!result.passed) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
}
