class SayaTubeVideo {
    constructor(title) {
        // Validasi: Judul tidak boleh kosong dan maksimal 100 karakter
        if (!title || title.length > 100) {
            throw new Error("Title tidak boleh kosong dan harus kurang dari 100 karakter.");
        }
        
        // Generate ID random sepanjang 5 digit
        // Pada saat objek dibuat, nilai “id” akan di-generate secara random sepanjang 5 digit 
        this.id = Math.floor(10000 + Math.random() * 90000);
        // Konstruktor pada kelas “SayaTubeVideo” menerima dua parameter yaitu judul video.
        this.title = title; // Simpan judul video
        this.playCount = 0; // Set play count awal ke 0
    }
    
    // method dengan nama “IncreasePlayCount” yang
    // menerima jumlah angka yang akan ditambahkan ke “playCount”.

    increasePlayCount(count) {
        // Validasi: Play count harus dalam rentang 0 hingga 10.000.000
        if (count < 0 || count > 10000000) {
            throw new Error("Jumlah penambahan play count harus antara 0 hingga 10.000.000.");
        }
        
        try {
            // Pastikan playCount tidak melebihi batas maksimal integer
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count melebihi batas maksimal integer.");
            }
            this.playCount += count; // Tambahkan count ke playCount
        } catch (error) {
            console.error("Terjadi kesalahan: " + error.message);
        }
    }
    
    // “PrintVideoDetails” yang melakukan print baik
    // dari id, title dan playCount dengan format bebas.

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`); //print id
        console.log(`Title: ${this.title}`); //title
        console.log(`Play Count: ${this.playCount}`); //play count
    }
}

// bedanya adalah property
// Username dan list kosong dari uploadedVideos.

class SayaTubeUser {
    constructor(username) {
        // Validasi: Username tidak boleh kosong dan maksimal 100 karakter
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan harus kurang dari 100 karakter.");
        }
        
        this.username = username; // Simpan username
        this.uploadedVideos = []; // Inisialisasi list kosong 
    }
    
    // SayaTubeUser”, terdapat method GetTotalVideoPlayCount() 
    // yang mengembalikan jumlah playCount dari semua video yang ada di list uploadedVideos
    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }
    
    // method AddVideo yang dapat menambahkan elemen baru ke list uploadedVideos. 
    // nambahin ke dalam list kosong yg dibuat diatas
    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Parameter harus berupa instance dari SayaTubeVideo.");
        }
        this.uploadedVideos.push(video); //push : nambah ke list
    }
    
    // PrintAllVideoPlaycount() yang melakukan print terhadap semua judul video
    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}
const user = new SayaTubeUser("Nanacan");

// Daftar judul film yang akan diunggah
const movies = [
    "Review Film Avengers Doomsday oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film Secret Wars oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film The Hobbit oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film The Lord Of The Rings oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film The Trauma Code Heroes On Call oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film Eternals oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film X-men oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film Enola Holmes oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film Avengers: Endgame oleh Prajna Paramitha Collab with Stan Lee",
    "Review Film Fast & Furious 2 oleh Prajna Paramitha Collab with Stan Lee"
];

// Loop untuk membuat video berdasarkan daftar film
movies.forEach(title => {
    const video = new SayaTubeVideo(title);
    user.addVideo(video); // Tambahkan video ke dalam daftar uploadedVideos user
    video.increasePlayCount(Math.floor(Math.random() * 10000000));
});
user.printAllVideoPlaycount();
console.log(`Total play count dari semua video: ${user.getTotalVideoPlayCount()}`);
