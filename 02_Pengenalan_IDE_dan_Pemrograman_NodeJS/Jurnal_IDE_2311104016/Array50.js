// Array dengan 50 elemen sesuai index-nya
const angkaArray = Array.from({ length: 50 }, (_, index) => index);

// Iterasi dan print output dari tiap elemen sesuai aturan
angkaArray.forEach((angka) => {
    let tambahan = "";
    if (angka % 2 === 0 && angka % 3 === 0) {
        tambahan = "#$#$";
    } else if (angka % 2 === 0) {
        tambahan = "##";
    } else if (angka % 3 === 0) {
        tambahan = "$$";
    }
    console.log(`${angka} ${tambahan}`);
});