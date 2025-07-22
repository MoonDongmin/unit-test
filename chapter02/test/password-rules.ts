// 예제 2-19
export const oneUpperCaseRule = (input: string) => {
  return {
    passed: input.toLowerCase() !== input,
    reason: "at least one upper case needed",
  };
};
