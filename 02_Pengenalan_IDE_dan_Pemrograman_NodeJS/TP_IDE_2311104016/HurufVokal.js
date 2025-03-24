const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", function(input) {
    // Pastikan input hanya satu karakter dan dalam huruf kapital
    if (input.length === 1 && /[A-Z]/.test(input)) {
        // Daftar huruf vokal
        const vokal = ['A', 'I', 'U', 'E', 'O'];
      
        //kalau sesuai dengan isi dalam array vokal maka artinya inputan merupakan huruf vokal, tpi
        // kalau bukan bagian dari array vokal maka artinya merupakan huruf konsonan
        if (vokal.includes(input)) {
            console.log(`Huruf ${input} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${input} merupakan huruf konsonan`);
        }
    } else {
        console.log("Harap masukkan satu huruf kapital!");
    }
    rl.close();
});
