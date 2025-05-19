// Impor library Aljabar yg udah dibuat sebelumnya
const Aljabar = require('./AljabarLibraries');

// Tes fungsi AkarPersamaanKuadrat
try {
  const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
  console.log("Akar-akar persamaan x² - 3x - 10 adalah:", akar); 
  // Output: [5, -2]
} catch (e) {
  console.error(e.message);
}

// Tes fungsi HasilKuadrat
const kuadrat = Aljabar.HasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari (2x - 3)² adalah:", kuadrat); 
// Output: [4, -12, 9]
