let total = 0;

const totalSoFar = () => {
  return total;
};

const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
  total += result;

  return result;
};

export default sum;

