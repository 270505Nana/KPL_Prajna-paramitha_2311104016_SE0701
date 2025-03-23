class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
        let hasil = a + b + c;
        console.log(`Hasil penjumlahan: ${hasil}`);
    }
}

// Fungsi utama
function main() {
    // NIM 2311104016 → tiga angka: 23, 11, 10
    // NIM berakhiran 6 → tipe data int
    let angka1 = 23; // int
    let angka2 = 11; // int
    let angka3 = 10; // int
    
    // Membuat objek dari kelas Penjumlahan
    const penjumlahan = new Penjumlahan();
    
    // Memanggil method JumlahTigaAngka
    penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
}

main();