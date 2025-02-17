describe('one uppercase rule', () => {
  test('given no uppercase, it fails', () => {
    const result = oneUpperCaseRule('abc');
    expect(result.passed).toEqual(false);
  });

  test('given one uppercase, it passes', () => {
    const result = oneUpperCaseRule('Abc');
    expect(result.passed).toEqual(true);
  });

  test('given a different uppercase, it passes', () => {
    const result = oneUpperCaseRule('aBc');
    expect(result.passed).toEqual(true);
  });
});

// test.each()를 사용하여 코드 중복 제거
describe('one uppercase rule', () => {
  test('given no uppercase, it fails', () => {
    const result = oneUpperCaseRule('abc');
    expect(result.passed).toEqual(false);
  });

  test.each(['ABC', 'aBc'])('given one uppercase, it passes', (input) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(true);
  })
});


// JS를 가지고 여러 입력 값 테스트하기
describe('one uppercase rule, with vanilla JS for', () => {
  const tests = {
    Abc: true,
    aBc: true,
    abc: false,
  };

  for (const [input, expected] of Object.entries(tests)) {
    test(`given ${input}, ${expected}`, () => {
      const result = oneUpperCaseRule(input);
      expecet(result.passed).toEqual(expected);
    });
  }
});
