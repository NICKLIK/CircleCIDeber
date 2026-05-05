const { restar } = require("../src/calculadora");

test("debe restar dos numeros correctamente", () => {
  expect(restar(10, 4)).toBe(6);
});