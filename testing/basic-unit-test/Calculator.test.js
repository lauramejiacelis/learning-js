const Calculator = require("./Calculator");

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe("Sum", () => {
    it("should return 2 when 1 + 1", () => {
      const result = calc.sum(1, 1);
      expect(result).toEqual(2);
    });

    it("should return 0 when -1 + 1", () => {
      const result = calc.sum(-1, 1);
      expect(result).toEqual(0);
    });
  });
});

test("Calc sum returns 1 + 1 = 2", () => {
  const calc = new Calculator();
  const result = calc.sum(1, 1);
  expect(result).toEqual(2);
});
