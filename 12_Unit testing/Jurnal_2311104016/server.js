const express = require('express');

// Import module 'path' untuk menangani path file dan folder
const path = require('path');
const app = express();
const port = 3000;

/* 
  Fungsi untuk menghitung pangkat a^b dengan aturan khusus:
  - Jika b == 0, hasil = 1
  - Jika b < 0, hasil = -1
  - Jika b > 10 atau a > 100, hasil = -2
  - Jika hasil melebihi batas bilangan integer positif, hasil = -3
  - Jika valid, hitung a^b menggunakan perulangan (tanpa Math.pow)
*/
function CariNilaiPangkat(a, b) {
  // Konversi input dari string ke integer
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  // Aturan: jika b = 0 maka hasil selalu 1
  if (b === 0) return 1;

  // Aturan: jika b < 0 maka hasil -1
  if (b < 0) return -1;

  // Aturan: jika b > 10 atau a > 100 maka hasil -2
  if (b > 10 || a > 100) return -2;

  // Inisialisasi variabel hasil
  let result = 1;

  // Perulangan sebanyak b kali untuk menghitung a^b
  for (let i = 0; i < b; i++) {
    result *= a;

    // Aturan: jika hasil lebih dari batas maksimal bilangan integer 32-bit, return -3
    if (result > 2147483647) return -3;
  }

  // Jika semua aturan tidak dilanggar, kembalikan hasil pangkat
  return result;
}
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint GET untuk menghitung pangkat berdasarkan query parameter
app.get('/pangkat', (req, res) => {
  const { a, b } = req.query;
  const hasil = CariNilaiPangkat(a, b);
  res.send(`Hasil dari ${a} pangkat ${b} adalah: ${hasil}`);
});

if (require.main === module) {
    app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
}
module.exports = { CariNilaiPangkat };
