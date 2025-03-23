class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

// Fungsi utama
function main() {
    // NIM 2311104016 → tiga angka: 23, 11, 10
    let angka1 = 23; 
    let angka2 = 11; 
    let angka3 = 10; 
    
    // Membuat objek dari kelas SimpleDataBase
    const database = new SimpleDataBase();
    
    // Menambahkan data ke dalam database
    database.AddNewData(angka1);
    database.AddNewData(angka2);
    database.AddNewData(angka3);
    
    // Memanggil method PrintAllData
    database.PrintAllData();
}
main();
