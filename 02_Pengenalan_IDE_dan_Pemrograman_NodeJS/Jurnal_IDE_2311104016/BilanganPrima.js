// Import modul readline untuk membaca input dari terminal
const readline = require('readline');

// Membuat antarmuka readline untuk menerima input dan memberikan output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
// menerima inputan angkanya
rl.question("Masukkan angka (1-10000): ", function(nilaiString) {
    // Mengonversi input string menjadi bilangan integer
    const nilaiInt = parseInt(nilaiString);
    
    // pengecekan
    if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
        console.log("Harap masukkan angka yang valid antara 1 dan 10000.");
    } else {
        let isPrima = nilaiInt > 1;
        
        // Loop untuk mengecek apakah angka memiliki faktor selain 1 dan dirinya sendiri
        for (let i = 2; i * i <= nilaiInt; i++) {
            if (nilaiInt % i === 0) { // Jika habis dibagi angka lain, berarti bukan prima
                isPrima = false;
                break;
            }
        }
        
        // Menampilkan hasil apakah angka tersebut bilangan prima atau bukan
        if (isPrima) {
            console.log(`Angka ${nilaiInt} merupakan bilangan prima.`);
        } else {
            console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima.`);
        }
    }
    rl.close();
});