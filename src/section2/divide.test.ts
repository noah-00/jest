// toThrow

import { divide, ZeroDivisorError } from "./divide";

it("the error", () => {
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
