// A.Buatlah sebuah class bernama “DoorMachine”
// Definisi class DoorMachine
class DoorMachine {
    constructor() {
        this.state = "Terkunci"; // State awal
    }

    // Method untuk mengunci pintu
    kunciPintu() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu sudah dalam keadaan terkunci");
        }
    }

    // Method untuk membuka pintu
    bukaPintu() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        } else {
            console.log("Pintu sudah terbuka");
        }
    }

    // Method untuk menampilkan status pintu saat ini
    getStatus() {
        console.log(`Status pintu saat ini: ${this.state}`);
    }
}

// Contoh penggunaan dalam class utama/main
const pintu = new DoorMachine();

pintu.getStatus(); // Output: Status pintu saat ini: Terkunci
pintu.bukaPintu(); // Output: Pintu tidak terkunci
pintu.getStatus(); // Output: Status pintu saat ini: Terbuka
pintu.kunciPintu(); // Output: Pintu terkunci
pintu.getStatus(); // Output: Status pintu saat ini: Terkunci