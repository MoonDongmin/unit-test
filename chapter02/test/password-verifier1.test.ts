import {
    beforeEach,
    describe,
    expect,
    it,
    test,
}                          from "bun:test";
import {PasswordVerifier1} from "./PasswordVerifier1.ts";
import type {PasswordRule} from "./password-verifier0.ts";

// 예제 2-11
describe("PasswordVerifier", () => {
    describe("with a failing rule", () => {
        it("has an error message based on the rule.reason", () => {
            const verifier = new PasswordVerifier1();
            const fakeRule = () => ({
                passed: false,
                reason: "fake reason",
            });

            verifier.addRule(fakeRule);
            const errors = verifier.verify("any value");

            expect(errors[0]).toContain("fake reason");
        });
    });
});

// 예제 2-12
describe("PasswordVerifier", () => {
    describe("with a failing rule", () => {
        it("has an error message based on the rule.reason", () => {
            const verifier = new PasswordVerifier1();
            const fakeRule = () => ({
                passed: false,
                reason: "fake reason",
            });

            verifier.addRule(fakeRule);
            const errors = verifier.verify("any value");

            expect(errors[0]).toContain("fake reason");
        });

        it("has exactly one error", () => {
            const verifier = new PasswordVerifier1();
            const fakeRule = () => ({
                passed: false,
                reason: "fake reason",
            });

            verifier.addRule(fakeRule);
            const errors = verifier.verify("any value");

            expect(errors.length).toBe(1);
        });
    });
});

// 예제 2-13
describe("PasswordVerifier", () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    });

    describe("with a failing rule", () => {
        let fakeRule: PasswordRule, errors: Array<string>;

        beforeEach(() => {
            fakeRule = () => ({
                passed: false,
                reason: "fake reason",
            });
            verifier.addRule(fakeRule);
        });

        it("has an error message based on the rule.reason", () => {
            errors = verifier.verify("any value");

            expect(errors[0]).toContain("fake reason");
        });

        it("has exactly one error", () => {
            errors = verifier.verify("any value");
            expect(errors.length).toBe(1);
        });
    });
});

// 예제 2-14
describe("PasswordVerifier", () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    });

    describe("with a failing rule", () => {
        let fakeRule: PasswordRule, errors: Array<string>;

        beforeEach(() => {
            fakeRule = (input) => ({
                passed: false,
                reason: "fake reason",
            });
            verifier.addRule(fakeRule);
            errors = verifier.verify("any value");
        });

        it("has an error message based on the rule.reason", () => {
            expect(errors[0]).toContain("fake reason");
        });

        it("has exactly one error", () => {
            expect(errors.length).toBe(1);
        });
    });
});

// 예제 2-15
describe("PasswordVerifier", () => {
    let verifier: PasswordVerifier1;
    beforeEach(() => {
        verifier = new PasswordVerifier1();
    });

    describe("with a failing rule", () => {
        let fakeRule: PasswordRule, errors: Array<string>;

        beforeEach(() => {
            fakeRule = () => ({
                passed: false,
                reason: "fake reason",
            });
            verifier.addRule(fakeRule);
            errors = verifier.verify("any value");
        });

        it("has an error message based on the rule.reason", () => {
            expect(errors[0]).toContain("fake reason");
        });

        it("has exactly one error", () => {
            expect(errors.length).toBe(1);
        });
    });

    describe("with a passing rule", () => {
        let fakeRule: PasswordRule, errors: Array<string>;

        beforeEach(() => {
            fakeRule = () => ({
                passed: true,
                reason: "",
            });
            verifier.addRule(fakeRule);
            errors = verifier.verify("any value");
        });

        it("has no errors", () => {
            expect(errors.length).toBe(0);
        });
    });

    describe("with a failing and a passing rule", () => {
        let fakeRulePass: PasswordRule;
        let fakeRuleFail: PasswordRule;
        let errors: Array<string>;

        beforeEach(() => {
            fakeRulePass = () => ({
                passed: true,
                reason: "fake success",
            });
            fakeRuleFail = () => ({
                passed: false,
                reason: "fake reason",
            });
            verifier.addRule(fakeRulePass);
            verifier.addRule(fakeRuleFail);
            errors = verifier.verify("any value");
        });

        it("has one error", () => {
            expect(errors.length).toBe(1);
        });

        it("error text belongs to failed rule", () => {
            expect(errors[0]).toContain("fake reason");
        });
    });
});

// 예제 2-16
describe("PasswordVerifier", () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    });

    describe("with a failing rule", () => {
        let errors: Array<string>;

        beforeEach(() => {
            verifier.addRule(makeFailingRule("fake reason"));
            errors = verifier.verify("any value");
        });

        it("has an error message based on the rule.reason", () => {
            expect(errors[0]).toContain("fake reason");
        });

        it("has exactly one error", () => {
            expect(errors.length).toBe(1);
        });
    });

    describe("with a passing rule", () => {
        let errors: Array<string>;

        beforeEach(() => {
            verifier.addRule(makePassingRule());
            errors = verifier.verify("any value");
        });

        it("has no errors", () => {
            expect(errors.length).toBe(0);
        });
    });

    describe("with a failing and a passing rule", () => {
        let errors: Array<string>;

        beforeEach(() => {
            verifier.addRule(makePassingRule());
            verifier.addRule(makeFailingRule("fake reason"));
            errors = verifier.verify("any value");
        });

        it("has one error", () => {
            expect(errors.length).toBe(1);
        });

        it("error text belongs to failed rule", () => {
            expect(errors[0]).toContain("fake reason");
        });
    });

    const makeFailingRule = (reason: string) => {
        return () => {
            return {
                passed: false,
                reason: reason,
            };
        };
    };

    const makePassingRule = () => () => {
        return {
            passed: true,
            reason: "",
        };
    };
});

// 예제 2-17
const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({
    passed: true,
    reason: "",
});

const makeVerifierWithPassingRule = (): PasswordVerifier1 => {
    const verifier = makeVerifier();
    verifier.addRule(passingRule);
    return verifier;
};

const makeVerifierWithFailedRule = (reason: string) => {
    const verifier = makeVerifier();
    const fakeRule = () => ({
        passed: false,
        reason: reason,
    });
    verifier.addRule(fakeRule);
    return verifier;
};

describe("v8 PasswordVerifier", () => {
    describe("with a failing rule", () => {
        it("has an error message based on the rule.reason", () => {
            const verifier = makeVerifierWithFailedRule("fake reason");
            const errors = verifier.verify("any input");
            expect(errors[0]).toContain("fake reason");
        });
        it("has exactly one error", () => {
            const verifier = makeVerifierWithFailedRule("fake reason");
            const errors = verifier.verify("any input");
            expect(errors.length).toBe(1);
        });
    });
    describe("with a passing rule", () => {
        it("has no errors", () => {
            const verifier = makeVerifierWithPassingRule();
            const errors = verifier.verify("any input");
            expect(errors.length).toBe(0);
        });
    });
    describe("with a failing and a passing rule", () => {
        it("has one error", () => {
            const verifier = makeVerifierWithFailedRule("fake reason");
            verifier.addRule(passingRule);
            const errors = verifier.verify("any input");
            expect(errors.length).toBe(1);
        });
        it("error text belongs to failed rule", () => {
            const verifier = makeVerifierWithFailedRule("fake reason");
            verifier.addRule(passingRule);
            const errors = verifier.verify("any input");
            expect(errors[0]).toContain("fake reason");
        });
    });
});

// 예제 2-18
test(
    "pass verifier, with failed rule, " +
    "has an error message based on the rule.reason",
    () => {
        const verifier = makeVerifierWithFailedRule("fake reason");
        const errors = verifier.verify("any input");
        expect(errors[0]).toContain("fake reason");
    },
);

test("pass verifier, with failed rule, has exactly one error", () => {
    const verifier = makeVerifierWithFailedRule("fake reason");
    const errors = verifier.verify("any input");
    expect(errors.length).toBe(1);
});

test("pass verifier, with passing rule, has no errors", () => {
    const verifier = makeVerifierWithPassingRule();
    const errors = verifier.verify("any input");
    expect(errors.length).toBe(0);
});

test("pass verifier, with passing and failing rule, " + "has one error", () => {
    const verifier = makeVerifierWithFailedRule("fake reason");
    verifier.addRule(passingRule);
    const errors = verifier.verify("any input");
    expect(errors.length).toBe(1);
});

test(
    "pass verifier, with passing and failing rule, " +
    "error text belongs to failed rule",
    () => {
        const verifier = makeVerifierWithFailedRule("fake reason");
        verifier.addRule(passingRule);
        const errors = verifier.verify("any input");
        expect(errors[0]).toContain("fake reason");
    },
);

// 예제 2-25
test("verify, with no rules, throws exception", () => {
    const verifier = makeVerifier();
    try {
        verifier.verify("any input");
        // fail('error was expected but not thrown');
        // expect.assertions(1);
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        expect(errorMessage).toContain("no rules configured");
    }
});

// 예제 2-26
test("verify, with no rules, throws exception", () => {
    const verifier = makeVerifier();
    expect(() => verifier.verify("any input"))
        .toThrow(/no rules configured/);
});

type result = { passed: boolean, reason: string }

export const oneUpperCaseRule = (input: string): result => {
    return {
        passed: (input.toLowerCase() !== input),
        reason: "at least one upper case needed",
    };
};

describe("one uppercase rule", () => {
    test.each([
        ["Abc", true],
        ["aBc", true],
        ["abc", false],
    ])
    ("given %s %s", (input: string, expected: boolean) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(expected);
    });
});
