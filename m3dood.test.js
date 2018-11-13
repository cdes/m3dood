const m3dood = require('./m3dood')

var maleEntity = ["كتاب", "كتابان", "كتب"]
var femaleEntity = ["مكتبة", "مكتبتان", "مكتبات"]

test('zero', () => {
  expect(m3dood(0, ...maleEntity)).toBe("دون كتب");
});

test('one male', () => {
  expect(m3dood(1, ...maleEntity)).toBe("كتاب واحد");
});

test('one female', () => {
  expect(m3dood(1, ...femaleEntity)).toBe("مكتبة واحدة");
});

test('dual', () => {
  expect(m3dood(2, ...maleEntity)).toBe("كتابان");
});

test('three', () => {
  expect(m3dood(3, ...maleEntity)).toBe("3 كتب");
});

test('ten', () => {
  expect(m3dood(10, ...maleEntity)).toBe("10 كتب");
});

test('eleven', () => {
  expect(m3dood(11, ...maleEntity)).toBe("11 كتاب");
});

test('a hundred', () => {
  expect(m3dood(100, ...maleEntity)).toBe("100 كتاب");
});

test('a hundred and one', () => {
  expect(m3dood(101, ...maleEntity)).toBe("101 من الكتب");
});

test('a hundred and four', () => {
  expect(m3dood(104, ...maleEntity)).toBe("104 كتب");
});

test('a hundred and eleven', () => {
  expect(m3dood(111, ...maleEntity)).toBe("111 كتاب");
});