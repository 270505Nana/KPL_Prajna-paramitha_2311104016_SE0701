const readline = require('readline');
const CovidConfig = require('./covidconfig');

// Membuat instance konfigurasi
const covidConfig = new CovidConfig();

// Membuat antarmuka input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menanyakan suhu badan pengguna
rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${covidConfig.configData.satuan_suhu}: `, (suhuInput) => {
    const suhu = parseFloat(suhuInput);

    // Menanyakan hari demam pengguna
    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', (hariDemanInput) => {
        const hariDeman = parseInt(hariDemanInput);

        // Menentukan batas suhu berdasarkan satuan
        let suhuValid;
        if (covidConfig.configData.satuan_suhu === 'celcius') {
            suhuValid = suhu >= 36.5 && suhu <= 37.5;
        } else {  // fahrenheit
            suhuValid = suhu >= 97.7 && suhu <= 99.5;
        }

        // Menentukan batas hari demam
        const hariDemanValid = hariDeman < covidConfig.configData.batas_hari_deman;

        // Menampilkan hasil berdasarkan kondisi
        if (suhuValid && hariDemanValid) {
            console.log(covidConfig.configData.pesan_diterima);
        } else {
            console.log(covidConfig.configData.pesan_ditolak);
        }

        // Tanyakan apakah ingin mengubah satuan suhu
        rl.question('Apakah Anda ingin mengganti satuan suhu? (y/n): ', (ubahSatuan) => {
            if (ubahSatuan.toLowerCase() === 'y') {
                covidConfig.UbahSatuan();
                console.log(`Satuan suhu telah diubah menjadi ${covidConfig.configData.satuan_suhu}.`);
            }

            rl.close();
        });
    });
});
