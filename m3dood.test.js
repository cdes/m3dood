var m3dood = require('./m3dood')

var books = m3dood("كتاب", "كتابان", "كتب");
var libraries = m3dood("مكتبة", "مكتبتان", "مكتبات");

test('zero', () => {
  expect(books(0)).toBe("دون كتب");
});

test('one male', () => {
  expect(books(1)).toBe("كتاب واحد");
});

test('one female', () => {
  expect(libraries(1)).toBe("مكتبة واحدة");
});

test('dual', () => {
  expect(books(2)).toBe("كتابان");
});

test('three', () => {
  expect(books(3)).toBe("3 كتب");
});

test('ten', () => {
  expect(books(10)).toBe("10 كتب");
});

test('eleven', () => {
  expect(books(11)).toBe("11 كتاب");
});

test('a hundred', () => {
  expect(books(100)).toBe("100 كتاب");
});

test('a hundred and one', () => {
  expect(books(101)).toBe("101 من الكتب");
});

test('a hundred and four', () => {
  expect(books(104)).toBe("104 كتب");
});

test('a hundred and eleven', () => {
  expect(books(111)).toBe("111 كتاب");
});