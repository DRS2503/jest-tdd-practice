import { capitalize, reverseString, calculator, cipher, analyzeArray } from './functions'

test('Frist char capital', () => {
  expect(capitalize('hello')).toBe('Hello');
})

test('Reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('add', () => {
  expect(calculator.add(2, 5)).toBe(7);
})

test('subtract', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
})

test('multiply', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
})

test('divide', () => {
  expect(calculator.divide(10, 2)).toBe(5);
})

test('cipher xyz', () => {
  expect(cipher('xyz', 3)).toBe('abc');
})

test('cipher HeLLo', () => {
  expect(cipher('HeLLo', 3)).toBe('KhOOr');
})

test('Punctuation remains', () => {
  expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('Analyze array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual(
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
  )
})