// 예제 2-2
export interface PasswordRuleResult {
  passed: boolean;
  reason: string;
}

// 예제 2-2
export type PasswordRule = (input: string) => PasswordRuleResult;

// 예제 2-2
export const verifyPassword = (input: string, rules: Array<PasswordRule>) => {
  const errors: Array<string> = [];
  
  rules.forEach((rule) => {
    const result = rule(input);
    if (!result.passed) {
      errors.push(`error ${result.reason}`);
      // 예제 2-4
      // errors.push(`error ${result.reason}`);
    }
  });
  return errors;
};
