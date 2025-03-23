class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    // B.Class tersebut juga memiliki method bernama PrintData yang melakukan print di console 
    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Fungsi utama
function main() {
    // Membuat objek dari kelas DataGeneric dengan NIM sebagai data
    const dataObj = new DataGeneric("2311104016"); // Ganti dengan NIM Anda
    
    // Memanggil method PrintData
    dataObj.PrintData();
}
main();
