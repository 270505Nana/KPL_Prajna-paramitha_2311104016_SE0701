// membuat class KodePos
class KodePos {
    constructor() {
        // Table-driven data untuk mapping Kelurahan ke Kode Pos
        this.data = {
            "Batununggal": 40266,
            "Kujangsari": 40287,
            "Mengger": 40267,
            "Wates": 40256,
            "Cijagra": 40262,
            "Jatisari": 40286,
            "Margasari": 40286,
            "Sekejati": 40286,
            "Kebonwaru": 40272,
            "Maleer": 40274,
            "Samoja": 40273
        };
    }
    // B.Pada class tersebut, tambahkan sebuah method dengan nama “getKodePos”  yang mengembalikan kode pos
    // Method untuk mendapatkan kode pos berdasarkan nama kelurahan
    getKodePos(kelurahan) {
        return this.data[kelurahan] || "Kode pos tidak ditemukan";
    }
}

// Contoh penggunaan dalam class utama/main
const kodePos = new KodePos();

console.log(kodePos.getKodePos("Batununggal")); // Output: 40266
console.log(kodePos.getKodePos("Kebonwaru"));   // Output: 40272
console.log(kodePos.getKodePos("TidakAda"));    // Output: Kode pos tidak ditemukan
