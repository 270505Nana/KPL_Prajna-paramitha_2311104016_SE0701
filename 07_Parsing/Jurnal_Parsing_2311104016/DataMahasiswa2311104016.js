const fs = require('fs');

class DataMahasiswa2311104016 {
    static ReadJSON() {
        // Baca file JSON
        const rawData = fs.readFileSync('jurnal7_1_2311104016.json', 'utf8');

        // Ubah ke object JS
        const mhs = JSON.parse(rawData);

        // Tampilkan semua data mahasiswa
        console.log('=== Biodata Mahasiswa ===');
        console.log(`Nama     : ${mhs.firstName} ${mhs.lastName}`);
        console.log(`Jenis Kelamin : ${mhs.gender}`);
        console.log(`Umur     : ${mhs.age} tahun`);
        console.log('Alamat   :');
        console.log(`   Jalan : ${mhs.address.streetAddress}`);
        console.log(`   Kota  : ${mhs.address.city}`);
        console.log(`   Prov  : ${mhs.address.state}`);

        // Tampilkan daftar matkul
        console.log('\n=== Mata Kuliah yang Diambil ===');
        mhs.courses.forEach((mk, index) => {
            const kode = mk.code.trim(); // buat ngebersihin spasi depan
            console.log(`MK ${index + 1}: ${kode} - ${mk.name}`);
        });
    }
}

// Panggil method-nya
DataMahasiswa2311104016.ReadJSON();
