class KodeBuah {
    constructor() {
        // Table-driven data untuk mapping Kelurahan ke Kode buah
        this.data = {
            "Apel": 'A00',
            "Aprikot": 'B00',
            "Alpukat": 'C00',
            "Pisang": 'D00',
            "Paprika": 'E00',
            "Backberry": 'F00',
            "Ceri": 'H00',
            "Kelapa": 'I00',
            "Jagung": 'J00',
            "kurma": 'K00',
            "Durian": 'L00',
            "Anggur": 'M00',
            "Melon": 'N00',
            "Semangka": 'O00',
        };
    }
    // B.Pada class tersebut, tambahkan sebuah method dengan nama “getKodeBuah”  yang mengembalikan kode buah
    // Method untuk mendapatkan kode pbuahos berdasarkan nama buah
    getKodeBuah(buah_segar) {
        return this.data[buah_segar] || "Kode buah gaada nih, salah deh masukinnya";
    }
}

// Contoh penggunaan dalam class utama/main
const kodeBuah = new KodeBuah();

console.log(kodeBuah.getKodeBuah("Apel")); 
console.log(kodeBuah.getKodeBuah("Pisang"));  
console.log(kodeBuah.getKodeBuah("Kiwi"));    