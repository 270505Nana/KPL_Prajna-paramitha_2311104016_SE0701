// Mengimpor modul Express
const express = require('express');
const app = express();

// Nentuin portnya
const PORT = 5000;

// Middleware untuk membaca dan mem-parsing body permintaan dengan format JSON
app.use(express.json());

// List statis berisi data 3 film teratas dari IMDB
let movieList = [
  {
    title: "The Shawshank Redemption", 
    director: "Frank Darabont",        
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    description: "Two imprisoned men bond over a number of years." 
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    stars: ["Marlon Brando", "Al Pacino", "James Caan"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description: "Batman faces the Joker, a criminal mastermind who seeks to create chaos."
  }
];

// Endpoint GET /api/Movies untuk mengembalikan seluruh data film
app.get('/api/Movies', (req, res) => {
  res.json(movieList); // Mengirim list semua movie dalam format JSON
});

// Endpoint GET /api/Movies/:index untuk mengambil data film berdasarkan index
app.get('/api/Movies/:index', (req, res) => {
  const index = parseInt(req.params.index); // Mengambil index dari parameter URL dan ubah ke angka
  // Validasi jika index tidak valid (kurang dari 0 atau lebih dari panjang list)
  if (index < 0 || index >= movieList.length) {
    return res.status(404).json({ message: 'Movie tidak ditemukan' }); // Kirim pesan error
  }
  res.json(movieList[index]); // Kirim data movie pada index yang diminta
});

// Endpoint POST /api/Movies untuk menambahkan film baru ke list
app.post('/api/Movies', (req, res) => {
  // Mengambil data movie dari body permintaan
  const { title, director, stars, description } = req.body;
  // Menambahkan movie baru ke dalam list
  movieList.push({ title, director, stars, description });
  // Mengirim respon sukses dengan data movie yang baru ditambahkan
  res.status(201).json({ message: 'Movie ditambahkan', data: { title, director, stars, description } });
});

// Endpoint DELETE /api/Movies/:index untuk menghapus film berdasarkan index
app.delete('/api/Movies/:index', (req, res) => {
  const index = parseInt(req.params.index); // Ambil index dari parameter URL
  // Cek apakah index valid
  if (index < 0 || index >= movieList.length) {
    return res.status(404).json({ message: 'Index tidak ditemukan' }); // Jika tidak valid, kirim error
  }
  // Menghapus satu elemen dari array movieList pada posisi index
  const deleted = movieList.splice(index, 1);
  // Mengirim respon sukses beserta data yang dihapus
  res.json({ message: `Movie pada index ${index} berhasil dihapus`, data: deleted[0] });
});

// Menjalankan server di port yang sudah ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/api/Movies`);
});
