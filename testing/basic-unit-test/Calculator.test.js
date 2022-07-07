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

  describe("Sub", ()=>{
    it("should return 0 when 1 - 1", ()=> {
      const result = calc.sub(1, 1);
      expect(result).toEqual(0);
    });
    it("should return -3 when 6 - 9", ()=>{
      const result = calc.sub(6, 9);
      expect(result).toEqual(-3)
    });
    it("should return 5 when 5 - 0", ()=>{
      const result= calc.sub(5, 0)
      expect(result).toEqual(5)
    })
  })

  describe("Mult", ()=>{
    it("should return 2 when 2 x 1", ()=> {
      const result = calc.mult(2, 1);
      expect(result).toEqual(2);
    });
    it("should return 0 when 0 x 4", ()=>{
      const result = calc.mult(0, 4);
      expect(result).toEqual(0)
    })
    it("should return -10 when 5 x -2", ()=>{
      const result = calc.mult(5, -2);
      expect(result).toEqual(-10)
    })
  })

  describe("Div", ()=>{
    it("should return 0 when 1 / 1", ()=> {
      const result = calc.div(1, 1);
      expect(result).toEqual(1);
    });
    it("shouild return Infinity when 5 / 0", ()=>{
      const result = calc.div(5,0);
      expect(result).toEqual(Infinity)
    })
    it("should return -2 when 4 / -2", ()=>{
      const result = calc.div(4, -2);
      expect(result).toEqual(-2)
    })
  })

});

test("Calc sum returns 1 + 1 = 2", () => {
  const calc = new Calculator();
  const result = calc.sum(1, 1);
  expect(result).toEqual(2);
});
