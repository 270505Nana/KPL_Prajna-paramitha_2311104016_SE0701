import process from "process";
import readline from "readline"; //buat baca barisnya

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Masukkan nama anda: ", (nama) => {
    // nama sebagai call back dengan nama var ano
    console.info(`Selamat datang, ${nama}!`)

    input.close();
})