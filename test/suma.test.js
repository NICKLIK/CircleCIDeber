const { sumar } = require("../src/calculadora");

test("debe sumar dos numeros correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});