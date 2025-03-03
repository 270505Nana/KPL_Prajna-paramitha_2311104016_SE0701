const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let prices = [];

rl.question("Masukkan jumlah barang: ", (count) => {
    let itemCount = parseInt(count);
    let index = 0;

    function askPrice() {
        if (index < itemCount) {
            rl.question(`Masukkan harga barang ke-${index + 1}: `, (price) => {
                prices.push(parseInt(price));
                index++;
                askPrice();
            });
        } else {
            processInput();
        }
    }

    askPrice();

    function processInput() {
        let total = prices.reduce((acc, curr) => acc + curr, 0);
        let discountCategory = "Tidak Ada Diskon";

        if (total > 100000) {
            discountCategory = "Diskon Besar";
        } else if (total >= 50000) {
            discountCategory = "Diskon Sedang";
        }

        console.log("\nOutput yang diharapkan:");
        console.log(`Total harga: ${total}`);
        console.log(`Jumlah barang: ${itemCount}`);
        console.log(`Kategori Diskon: ${discountCategory}`);

        prices.forEach((_, i) => {
            console.log(`Informasi tambahan untuk barang ke-${i + 1}`);
        });

        rl.close();
    }
});
