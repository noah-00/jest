import { Calculator } from "./mock_spy";

it("spy on Calculator.sum", () => {
  const calculator = new Calculator();
  const spy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  const result2 = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(2);
  expect(spy).toHaveBeenCalledWith(1, 2);

  spy.mockRestore();
});
