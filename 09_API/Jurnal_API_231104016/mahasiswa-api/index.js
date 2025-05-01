const express = require('express'); // Menggunakan Express framework
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware untuk parsing request body format JSON
let mahasiswaList = JSON.parse(fs.readFileSync('./mahasiswa.json'));

// GET /api/Mahasiswa - Mengembalikan semua mahasiswa
app.get('/api/Mahasiswa', (req, res) => {
  res.json(mahasiswaList); // Kirim semua data mahasiswa
});

// GET /api/Mahasiswa/:id - Mengembalikan mahasiswa berdasarkan index
app.get('/api/Mahasiswa/:id', (req, res) => {
  const index = parseInt(req.params.id);
  if (index < 0 || index >= mahasiswaList.length) {
    return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
  res.json(mahasiswaList[index]); // Kirim data mahasiswa pada index
});

// POST /api/Mahasiswa - Menambahkan mahasiswa baru
app.post('/api/Mahasiswa', (req, res) => {
  const { name, nim, course, year } = req.body; // Ambil data dari request body
  mahasiswaList.push({ name, nim, course, year }); // Tambah ke list
  res.status(201).json({ message: 'Mahasiswa berhasil ditambahkan', data: { name, nim, course, year } });
});

// DELETE /api/Mahasiswa/:id - Menghapus mahasiswa berdasarkan index
app.delete('/api/Mahasiswa/:id', (req, res) => {
  const index = parseInt(req.params.id);
  if (index < 0 || index >= mahasiswaList.length) {
    return res.status(404).json({ message: 'Index tidak ditemukan' });
  }
  const deleted = mahasiswaList.splice(index, 1); // Hapus data dari list
  res.json({ message: `Mahasiswa pada index ${index} berhasil dihapus`, data: deleted[0] });
});

// Jalankan server & info port
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/api/Mahasiswa`);
});
