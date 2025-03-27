class SayaTubeVideo {
    constructor(title) {
        // Validasi: Pastikan title tidak kosong dan tidak lebih dari 100 karakter
        // Parameter title untuk melakukan pengecekan
        if (!title || title.length > 100) {
            throw new Error("Title tidak boleh kosong dan harus kurang dari 100 karakter.");
        }
        
        // Generate ID random 5 digit
        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title; // Simpan judul video
        this.playCount = 0; // Set play count awal ke 0
    }
    
    increasePlayCount(count) {
        // Validasi: buat mastiin count gak negatif
        if (count < 0) {
            throw new Error("Jumlah penambahan play count gk bisa negatif nih.");
        }
        
        this.playCount += count; // Tambahkan count ke playCount
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
