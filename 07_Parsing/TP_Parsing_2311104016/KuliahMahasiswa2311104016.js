// Import module buat baca file
const fs = require('fs');

// Bikin class sesuai nama file
class KuliahMahasiswa2311104016 {
    // Method buat baca dan tampilkan isi file JSON
    static ReadJSON() {
        // Baca isi file
        const data = fs.readFileSync('tp7_2_2311104016.json', 'utf8');

        // Ubah ke object JS
        const obj = JSON.parse(data);

        // Ambil array courses
        const mataKuliah = obj.courses;

        // Tampilkan ke layar
        console.log('Daftar mata kuliah yang diambil:');
        mataKuliah.forEach((mk, index) => {
            const kode = mk.code.trim(); // hapus spasi depan kalau ada
            console.log(`MK ${index + 1} ${kode} - ${mk.name}`);
        });
    }
}

// Jalankan method-nya
KuliahMahasiswa2311104016.ReadJSON();
