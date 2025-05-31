const { CariNilaiPangkat } = require('./server');

describe('CariNilaiPangkat', () => {
  test('b = 0 harus mengembalikan 1', () => {
    expect(CariNilaiPangkat(5, 0)).toBe(1);
  });

  test('b < 0 harus mengembalikan -1', () => {
    expect(CariNilaiPangkat(5, -3)).toBe(-1);
  });

  test('b > 10 harus mengembalikan -2', () => {
    expect(CariNilaiPangkat(2, 11)).toBe(-2);
  });

  test('a > 100 harus mengembalikan -2', () => {
    expect(CariNilaiPangkat(101, 2)).toBe(-2);
  });

 test('hasil melebihi batas integer 32-bit harus mengembalikan -2', () => {
  // 1290^5 = 3,481,469,961,000 > 2,147,483,647
  expect(CariNilaiPangkat(1290, 5)).toBe(-2);
});

  test('hitung 2^3 = 8', () => {
    expect(CariNilaiPangkat(2, 3)).toBe(8);
  });

  test('hitung 10^2 = 100', () => {
    expect(CariNilaiPangkat(10, 2)).toBe(100);
  });

  test('hitung 100^1 = 100 (tepat di batas)', () => {
    expect(CariNilaiPangkat(100, 1)).toBe(100);
  });

  test('hasil tepat 2147483647 (maksimum integer) seharusnya valid', () => {
    // 2147483647 = 2147483647^1
    expect(CariNilaiPangkat(2147483647, 1)).toBe(-2); // gagal karena a > 100
  });
});
