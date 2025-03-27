// class SayaTubeVideo {
//     constructor(title) {
//         // Validasi: Pastikan title tidak kosong dan tidak lebih dari 100 karakter
//         // Parameter title untuk melakukan pengecekan
//         if (!title || title.length > 100) {
//             throw new Error("Title tidak boleh kosong dan harus kurang dari 100 karakter.");
//         }
        
//         // Generate ID random 5 digit
//         this.id = Math.floor(10000 + Math.random() * 90000); 
//         this.title = title; // Simpan judul video
//         this.playCount = 0; // Set play count awal ke 0
//     }
    
//     increasePlayCount(count) {
//         // Validasi: buat mastiin count gak negatif
//         if (count < 0) {
//             throw new Error("Jumlah penambahan play count gk bisa negatif nih.");
//         }
        
//         this.playCount += count; // Tambahkan count ke playCount
//     }
    
//     printVideoDetails() {
//         // Cetak detail video ke console
//         console.log(`Video ID: ${this.id}`);
//         console.log(`Title: ${this.title}`);
//         console.log(`Play Count: ${this.playCount}`);
//     }
// }

// const video = new SayaTubeVideo("Tutorial Design By Contract – Nana");
// video.increasePlayCount(100); // Tambahkan 100 ke play count
// video.printVideoDetails(); // Tampilkan detail video ke console

class SayaTubeVideo {
    constructor(title) {
        // Validasi: Pastikan title tidak kosong dan tidak lebih dari 100 karakter
        if (!title || title.length > 100) {
            throw new Error("Title tidak boleh kosong dan harus kurang dari 100 karakter.");
        }
        
        // Generate ID random 5 digit
        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title; // Simpan judul video
        this.playCount = 0; // Set play count awal ke 0
    }
    
    increasePlayCount(count) {
        // Validasi: Pastikan count tidak negatif dan maksimal 10.000.000 per panggilan
        if (count < 0 || count > 10000000) {
            throw new Error("Jumlah penambahan play count harus antara 0 hingga 10.000.000.");
        }
        
        try {
            // Pastikan playCount tidak melebihi batas maksimal integer di JavaScript (2^53 - 1)
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count melebihi batas maksimal integer.");
            }
            this.playCount += count; // Tambahkan count ke playCount
        } catch (error) {
            console.error("Terjadi kesalahan: " + error.message);
        }
    }
    
    printVideoDetails() {
        // Cetak detail video ke console
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}
const video = new SayaTubeVideo("Tutorial Design By Contract – Nana"); 
video.increasePlayCount(100); // Tambahkan 100 ke play count
video.printVideoDetails(); // Tampilkan detail video ke console

// Uji exception dengan perulangan untuk mencapai overflow
const testVideo = new SayaTubeVideo("Video Uji Overflow");
for (let i = 0; i < 1000; i++) {
    testVideo.increasePlayCount(10000000); // Tambahkan play count secara besar hingga terjadi error
}
testVideo.printVideoDetails();
