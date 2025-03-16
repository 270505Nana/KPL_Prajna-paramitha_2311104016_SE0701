class PosisiKarakterGame {
    constructor() {
        // Disini Set State awal karakter adalah "Berdiri"
        this.state = "Berdiri";
    }

    // Method untuk mengubah posisi karakter 
    ubahPosisi(tombol) {
        if (tombol === "S") {
            console.log("Tombol arah bawah ditekan"); // Output tambahan saat tombol S ditekan
        } else if (tombol === "W") {
            console.log("Tombol arah atas ditekan"); // Output tambahan saat tombol W ditekan
        }

        // Objek transisi menentukan perubahan posisi karakter
        const transisi = {
            "Berdiri": { "S": "Jongkok", "W": "Terbang" },
            "Jongkok": { "S": "Tengkurap", "W": "Berdiri" },
            "Tengkurap": { "W": "Jongkok" },
            "Terbang": { "S": "Berdiri", "X": "Berdiri" } // Jatuh langsung ke Berdiri
        };

        // cek ada ga transisi yang sesuai dengan tombol yang ditekan
        if (transisi[this.state] && transisi[this.state][tombol]) {
            this.state = transisi[this.state][tombol]; // Ubah posisi karakter
        }

        // Menampilkan posisi karakter setelah perubahan
        console.log(`Posisi sekarang: ${this.state}`);
    }
}

const karakter = new PosisiKarakterGame();
karakter.ubahPosisi("W"); // Output tambahan: "Tombol arah atas ditekan" + Posisi berubah: Berdiri -> Terbang
karakter.ubahPosisi("S"); // Output tambahan: "Tombol arah bawah ditekan" + Posisi berubah: Terbang -> Berdiri
karakter.ubahPosisi("S"); // Output tambahan: "Tombol arah bawah ditekan" + Posisi berubah: Berdiri -> Jongkok
karakter.ubahPosisi("S"); // Output tambahan: "Tombol arah bawah ditekan" + Posisi berubah: Jongkok -> Tengkurap
karakter.ubahPosisi("W"); // Output tambahan: "Tombol arah atas ditekan" + Posisi berubah: Tengkurap -> Jongkok
