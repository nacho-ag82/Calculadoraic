const { suma, resta , multiplica, divide, raiz} = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
  expect(resta(5, 3)).toBe(2);
});

test('Suma 0 + 10 y devuelve 10', () => {
  expect(suma(0, 10)).toBe(10);
});

test('Resta 10 - 0 y devuelve 10', () => { 
  expect(resta(10, 0)).toBe(10);
});

test('Multiplica 2 * 3 y devuelve 6', () => {
  expect(multiplica(2, 3)).toBe(6);
});

test('Divide 6 / 3 y devuelve 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('Raiz cuadrada de 9 y devuelve 3', () => {
  expect(raiz(9)).toBe(3);
});