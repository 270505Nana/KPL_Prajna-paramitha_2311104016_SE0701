// Membuat namespace AljabarLibraries
const AljabarLibraries = {
  
  /**
   * Fungsi untuk mencari akar-akar dari persamaan kuadrat ax² + bx + c = 0
   * @param {number[]} koefisien - array 3 elemen [a, b, c]
   * @returns {number[]} - array berisi dua akar real
   */

  AkarPersamaanKuadrat: function (koefisien) {
    const [a, b, c] = koefisien;                
    // Ambil a, b, c dari array
    const diskriminan = b * b - 4 * a * c;      
    // Hitung diskriminan

    if (diskriminan < 0) {
      throw new Error("Tidak memiliki akar real."); 
      // klo ga punya akar real, muncul message error
    }

    const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a); 
    // Rumus akar pertama
    const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a); 
    // Rumus akar kedua

    return [akar1, akar2]; // Ngembaliin array berisi dua akar
  },

  /**
   * Fungsi untuk mengkuadratkan persamaan linear (ax + b)²
   * @param {number[]} koefisien - array 2 elemen [a, b]
   * @returns {number[]} - array hasil kuadrat [a², 2ab, b²]
   */
  HasilKuadrat: function (koefisien) {
    const [a, b] = koefisien;

    // Rumus: (ax + b)² = a²x² + 2abx + b²
    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;

    return [a2, ab2, b2]; 
    // Hasil kuadrat dalam bentuk array koefisien
  }
};

// Export library biar dipanggil di main
module.exports = AljabarLibraries;
