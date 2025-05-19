// Membuat object berisi kumpulan fungsi matematika
const MatematikaLibraries = {
  
  // Membuat Fungsi untuk mencari Faktor Persekutuan Terbesar (FPB)
  FPB: function (a, b) {
    while (b !== 0) {
      let temp = b;    // Simpan nilai b ke variabel sementara
      b = a % b;       // b diisi dengan sisa pembagian a dibagi b
      a = temp;        // a diisi dengan nilai sebelumnya dari b
    }
    return Math.abs(a); // Untuk mengembalikan nilai absolut dari a sebagai FPB
  },

  // Fungsi untuk mencari Kelipatan Persekutuan Terkecil (KPK)
  KPK: function (a, b) {
    // Menghitung KPK dengan rumus: (a * b) / FPB(a, b)
    return Math.abs((a * b) / this.FPB(a, b));
  },

  // Fungsi untuk menghitung turunan dari persamaan polinomial
  Turunan: function (koefisien) {
    let hasil = [];                         // Array untuk menyimpan hasil turunan
    let derajat = koefisien.length - 1;     // Derajat tertinggi dari polinomial

    // Iterasi dari indeks pertama hingga sebelum elemen terakhir
    for (let i = 0; i < koefisien.length - 1; i++) {
      const koef = koefisien[i] * (derajat - i); // Koefisien hasil turunan
      if (koef === 0) continue;                  // Lewati klo hasil koefisien 0
      let pangkat = derajat - i - 1;             // Pangkat baru setelah turunan

      // Bentuk format turunan sesuai pangkat
      if (pangkat === 0) {
        hasil.push(`${koef}`);             // klo pangkat 0 (konstanta)
      } else if (pangkat === 1) {
        hasil.push(`${koef}x`);            // klo pangkat 1 (tanpa angka pangkat)
      } else {
        hasil.push(`${koef}x${pangkat}`);  // klo pangkat lebih dari 1
      }
    }

    return hasil.join(' + ').replace(/\+\s\-/, '- ');
  },

  // Fungsi untuk menghitung integral dari persamaan polinomial
  Integral: function (koefisien) {
    let hasil = [];                         // Array untuk menyimpan hasil integral
    let derajat = koefisien.length - 1;     // Derajat tertinggi dari polinomial

    // Iterasi semua koefisien
    for (let i = 0; i < koefisien.length; i++) {
      const pangkat = derajat - i + 1;         // Pangkat baru setelah integral
      const koef = koefisien[i] / pangkat;     // Koefisien setelah integral
      if (koef === 0) continue;                // Lewati jika koefisien 0

      // Format bentuk hasil integral
      let formatted = '';
      if (pangkat === 1) {
        formatted = `${koef}x`;             // Jika pangkat 1
      } else {
        formatted = `${koef}x${pangkat}`;   // Jika pangkat > 1
      }

      hasil.push(formatted);                // Masukkan ke dalam array hasil
    }

    hasil.push('C');  // Tambahkan konstanta integrasi 'C' di akhir

    // Gabungkan dan rapikan format tanda +
    return hasil.join(' + ').replace(/\+\s\-/, '- ');
  }
};

// Export modul
module.exports = MatematikaLibraries;
