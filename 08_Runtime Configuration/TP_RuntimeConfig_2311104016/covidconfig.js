const fs = require('fs');
const path = require('path');

class CovidConfig {
    constructor(configFile = 'covid_config.json') {
        this.configFile = configFile;
        this.configData = this.loadConfig();
    }

    // Membaca file konfigurasi
    loadConfig() {
        if (fs.existsSync(this.configFile)) {
            const data = fs.readFileSync(this.configFile);
            return JSON.parse(data);
        } else {
            // Nilai default jika file konfigurasi tidak ada
            return {
                "satuan_suhu": "celcius",
                "batas_hari_deman": 14,
                "pesan_ditolak": "Anda tidak diperbolehkan masuk ke dalam gedung ini",
                "pesan_diterima": "Anda dipersilahkan untuk masuk ke dalam gedung ini"
            };
        }
    }

    // Menyimpan perubahan konfigurasi ke file
    saveConfig() {
        const data = JSON.stringify(this.configData, null, 4);
        fs.writeFileSync(this.configFile, data);
    }

    // Method untuk mengganti satuan suhu
    UbahSatuan() {
        if (this.configData.satuan_suhu === 'celcius') {
            this.configData.satuan_suhu = 'fahrenheit';
        } else {
            this.configData.satuan_suhu = 'celcius';
        }
        this.saveConfig();
    }
}

module.exports = CovidConfig;
