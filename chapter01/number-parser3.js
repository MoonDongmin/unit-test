let total = 0;

const totalSoFar = () => {
  return total;
};

const logger = makeLogger();

const sum = (numbers) => {
  const [a, b] = numbers.split(',');

  logger.info('this is a very important log output', {
    firstNumWas: a,
    secondNumWas: b,
  });

  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
  total += result;

  return result;
};
