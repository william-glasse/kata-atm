const atm = require('../src/atm');

describe('ATM', () => {
  describe('should return a single note if the input amount is an available nominal amount', () => {
    const NOMINAL_VALUES = [10, 20, 50, 100];
    test.each(NOMINAL_VALUES)('%i', (amount) => {
      expect(atm(amount)).toBe(1);
    });
  });

  // test('should use a mixture of notes for valid inputs which dont equal a nominal amount', () => {
  //   const amount = 30;
  //   expect(atm(amount)).toBe(2);
  // });

  describe('should return -1 for invalid amounts', () => {
    test('less than 1', () => {
      const amount = 0;
      expect(atm(amount)).toBe(-1);
    });
    test('more than 1500', () => {
      const amount = 1501;
      expect(atm(amount)).toBe(-1);
    });
    test('arent divisible by 10', () => {
      const amount = 7;
      expect(atm(amount)).toBe(-1);
    });
  });
});
