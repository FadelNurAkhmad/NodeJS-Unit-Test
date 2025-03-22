import { sumAll } from "../src/sum.js";

const table = [
  [[], 0],
  [[10], 10],
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
  [[10, 10, 10, 10, 10, 10, 10], 70],
];

// akan melakukan iterasi / perulangan sesuai jumlah data di array
test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
