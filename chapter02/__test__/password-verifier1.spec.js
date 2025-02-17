describe('PasswordVerifier', () => {
  describe('with a failing rule', () => {
    it('has an error message based on the rule.reason', () => {
      const verifier = new PasswordVerifier1();
      const fakeRule = () => ({
        passed: false,
        reason: 'fake reason',
      });

      verifier.addRule(fakeRule);
      const errors = verifier.verify('any value');

      expect(errors[0]).toContain('fake reason');
    });

    it('has exactly one error', () => {
      const verifier = new PasswordVerifier1();
      const fakeRule = () => ({
        passed: false,
        reason: 'fake reason',
      });

      verifier.addRule(fakeRule);
      const errors = verifier.verify('any value');

      expect(errors.length).toBe(1);
    });
  });
});


describe('PasswordVerifier', () => {
  let verifier;

  beforEach(() => {
    verifier = new PasswordVerifier1();
  });

  describe('with a failing rule', () => {
    let fakeRule, errors;

    beforEach(() => {
      fakeRule = () => ({
        passed: false,
        reason: 'fake reason',
      });

      verifier.addRule(fakeRule);
    });

    it('has an error message based on the rule.reason', () => {
      errors = verifier.verify('any value');
      expect(errors[0]).toContain('fake reason');
    });

    it('has exactly one error', () => {
      errors = verifier.verify('any value');
      expect(errors.length).toBe(1);
    });
  });
});

// 위 코드 개선
describe('PasswordVerifier', () => {
  let verifier;

  beforEach(() => verifier = new PasswordVerifier1());

  describe('with a failing rule', () => {
    let errors;

    beforEach(() => {

      verifier.addRule(makeFailingRule('fake reason'));
      errors = verifier.verify('any value');
    });

    it('has an error message based on the rule.reason', () => {
      expect(errors[0]).toContain('fake reason');
    });

    it('has exactly one error', () => {
      expect(errors.length).toBe(1);
    });
  });
});

describe('with a passing rule', () => {
  let errors;

  beforEach(() => {
    verifier.addRule(makePassingRule());
    errors = verifier.verify('any value');
  });

  it('has no errors', () => {
    expect(errors.length).toBe(0);
  });
});

describe('with a failing and a passing rule', () => {
  let errors;

  beforEach(() => {
    verifier.addRule(makePassingRule)
    verifier.addRule(makeFailingRule('fake reason'));
    errors = verifier.verify('any value');
  });

  it('has noe error', () => {
    expect(errors.length).toBe(1);
  });

  it('error text belongs to failed rule', () => {
    expect(errors[0]).toContain('fake reason');
  })
});

const makeFailingRule = (reason) => {
  return () => {
    return {passed: false, reason: reason};
  };
};

const makePassingRule = () => () => {
  return {passed: true, reason: ''};
}


// beforeEach를 사용하지 않고
const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({passed: true, reason: ''});

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerifier();
  verifier.addRule(passingRule());
  return verifier;
}

const makeVerifierWithFailedRule = (reason) => {
  const verifier = makeVerifier();
  const fakeRule = () => ({passed: false, reason: reasoin});
  verifier.addRule(fakeRule);
  return verifier;
};

describe('v8 PasswordVerifier', () => {
  describe('with a failing rule', () => {
    it('has an error message based on the rule.reason', () => {
      const verifier = makeVerifierWithFailedRule('fake reason');
      const errors = verifier.verify('any input');
      expect(errors[0]).toContain('fake reason');
    });

    it('has exactly one error', () => {
      const verifier = makeVerifierWithFailedRule('fake reason');
      const errors = verifier.verify('any input');
      expect(errors.length).toBe(1);
    })
  });

  describe('with a passing rule', () => {
    it('has no error', () => {
      const verifier = makeVerifierWithPassingRule();
      const errors = verifier.verify('any input');
      expect(errors.length).toBe(0);
    })
  });

  describe('with a failing and a passing rule', () => {
    it('has one error', () => {
      const verifier = makeVerifierWithFailedRule('fake reason');
      verifier.addRule(passingRule);
      const errors = verifier.verify('any input');
      expect(errors.length).toBe(0);
    });
    it('export text belongs to failed rule', () => {
      const verifier = makeVerifierWithFailedRule('fake reason');
      verifier.addRule(passingRule);
      const errors = verifier.verify('any input');
      expect(errors[0]).toContain('fake reason');
    })
  });
});


// describe 사용하지 않고 작성하기
test('pass verifier, with failed rule, ' +
  'has an error message based on the rule.reason', () => {
  const verifier = makeVerifierWithFailedRule('fake reason');
  const errors = verifier.verify('any input');
  expect(errors[0]).toContain('fake  reason');
});

test('pass verifier, with failed rule, has exactly one error ', () => {
  const verifier = makeVerifierWithFailedRule('fake reason');
  const errors = verifier.verify('any input');
  expect(errors.length).toBe(1);
});

test('pass verifier, with passing rule, has on errors', () => {
  const verifier = makeVerifierWithPassingRule();
  const errors = verifier.verify('any input');
  expect(errors.length).toBe(0);
});

test('pass verifier, with passing and failing rule, has one errors', () => {
  const verifier = makeVerifierWithFailedRule('fake reason');
  verifier.addRule(passingRule);
  const errors = verifier.verify('any input');
  expect(errors.length).toBe(1);
});

test('pass verifier, with passing and failing rule, error text belongs to failed rule', () => {
  const verifier = makeVerifierWithFailedRule('fake reason');
  verifier.addRule(passingRule);
  const errors = verifier.verify('any input');
  expect(errors[0]).toContain('fake reason');
});

