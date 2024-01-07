export class ZeroDivisorError extends Error {}

export function divide(dividend: number, divisor: number) {
  if (divisor === 0) throw new ZeroDivisorError("You can't divide by zero");
  return dividend / divisor;
}
