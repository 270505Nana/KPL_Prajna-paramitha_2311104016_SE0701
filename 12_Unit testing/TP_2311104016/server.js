const express = require('express'); // Import framework Express
const path = require('path'); // Import modul path bawaan Node.js
const app = express(); // Membuat instance aplikasi Express
const port = 3000; // Port servernya

function CariTandaBilangan(a) {
  if (a < 0) return "Negatif"; // Jika input < 0, kembalikan "Negatif"
  else if (a > 0) return "Positif"; // Jika input > 0, kembalikan "Positif"
  else return "Nol"; // Jika input = 0, kembalikan "Nol"
}

app.use(express.static(path.join(__dirname, 'public')));
app.get('/cek', (req, res) => {
  const angka = parseInt(req.query.angka, 10); 
  const hasil = CariTandaBilangan(angka); // Panggil fungsi CariTandaBilangan
  res.send(`Angka tersebut adalah: ${hasil}`); // Kirim hasil sebagai response teks
});

// ❗ Hanya jalankan server jika file ini dijalankan langsung
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
}

// ❗ Ekspor fungsi agar bisa digunakan di unit test
module.exports = { CariTandaBilangan };

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
