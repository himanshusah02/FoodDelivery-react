import { sum } from "../Sum";
import "@testing-library/jest-dom";

test("this is the test of sum function", () => {
  const result = sum(5, 5);

  expect(result).toBe(10);
});
