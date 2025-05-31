const { CariTandaBilangan } = require('../server.js'); // Mengimpor fungsi CariTandaBilangan dari file server.js

describe('CariTandaBilangan', () => { // Blok pengujian utama dengan nama 'CariTandaBilangan'
  
  test('Harus mengembalikan "Negatif" jika input kurang dari 0', () => { // Test case pertama untuk input negatif
    expect(CariTandaBilangan(-5)).toBe("Negatif"); // Mengecek apakah output fungsi adalah "Negatif" ketika input -5
  });

  test('Harus mengembalikan "Positif" jika input lebih dari 0', () => { // Test case kedua untuk input positif
    expect(CariTandaBilangan(7)).toBe("Positif"); // Mengecek apakah output fungsi adalah "Positif" ketika input 7
  });

  test('Harus mengembalikan "Nol" jika input sama dengan 0', () => { // Test case ketiga untuk input nol
    expect(CariTandaBilangan(0)).toBe("Nol"); // Mengecek apakah output fungsi adalah "Nol" ketika input 0
  });

});
