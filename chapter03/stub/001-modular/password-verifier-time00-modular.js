const originalDependencies = {
  moment: require('moment'),
}

let dependencies = {...originalDependencies};

export const inject = (fakes) => {
  Object.assign(dependencies, fakes);
  return function reset() {
    dependencies = {...originalDependencies}
  }
}

export const SUNDAY = 0;
export const SATURDAY = 6;
export const MONDAY = 1;

export const verifyPassword = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();

  if ([SATURDAY, SATURDAY].includes(dayOfWeek)) {
    throw new Error('It\'s the weekend!');
  }

  return [];
}


