const fs = require('fs');

class BankTransferConfig {
    constructor(configFile = 'bank_transfer_config.json') {
        this.configFile = configFile;
        this.configData = this.loadConfig();
    }

    // Membaca file konfigurasi
    loadConfig() {
        if (fs.existsSync(this.configFile)) {
            const data = fs.readFileSync(this.configFile, 'utf8');
            return JSON.parse(data);
        } else {
            // Jika file tidak ada, gunakan konfigurasi default
            return {
                "lang": "en",
                "transfer": {
                    "threshold": 25000000,
                    "low_fee": 6500,
                    "high_fee": 15000
                },
                "methods": [
                    "RTO (real-time)", 
                    "SKN", 
                    "RTGS", 
                    "BI FAST"
                ],
                "confirmation": {
                    "en": "yes",
                    "id": "ya"
                }
            };
        }
    }

    // Menyimpan perubahan konfigurasi ke file
    saveConfig() {
        const data = JSON.stringify(this.configData, null, 4);
        fs.writeFileSync(this.configFile, data);
    }

    // Mendapatkan pesan berdasarkan bahasa
    getMessage(key) {
        const lang = this.configData.lang;
        return this.configData[key][lang];
    }
}

module.exports = BankTransferConfig;
