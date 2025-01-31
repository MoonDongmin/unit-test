

const asserEquals = (expected, actual) => {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} but was ${actual}`);
  }
};

const check = (name, implementation) => {
  try {
    implementation();
    console.log(`${name} passed`);
  } catch (e) {
    console.error(`${name} FAILED`, e.stack);
  }
};

check('sum with 2 numbers should sum them up', () => {
  const result = sum('1,2');
  asserEquals(3, result);
})

check('sum with multiple digit numbers should sum them up', () => {
  const result = sum('10,20');
  asserEquals(30, result);
})
