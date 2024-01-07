import { sum } from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("adds 1 + -2 to equal -1", () => {
//   expect(sum(1, -2)).toBe(-1);
// });

it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`("sum($a, $b) should be $expected", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
