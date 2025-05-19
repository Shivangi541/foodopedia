import { sum } from "../sum";

test("calculate sum of two numbers", () => {
  const result = sum(1, 2);
  expect(result).toBe(3); // assertion
});

test("calculate sum of two numbers", () => {
  const result = sum(9, 2);
  expect(result).toBe(11);
});
