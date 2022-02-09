// const NOMINAL_VALUES = [10, 20, 50, 100, 200, 500].reverse();

const isInvalidAmount = (amount) =>
  amount < 1 || amount > 1500 || amount % 10 !== 0;

const atm = (amount) => {
  if (isInvalidAmount(amount)) return -1;
  //   if (NOMINAL_VALUES.includes(amount)) return 1;
  return 1;
};

module.exports = atm;
