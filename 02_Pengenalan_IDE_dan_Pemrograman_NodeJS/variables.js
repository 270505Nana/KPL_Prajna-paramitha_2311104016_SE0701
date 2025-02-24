//  Mencoba 3 macam variable
// 1. Const : udah ditentuin 


// 2. Let : ga bisa dipanggil ulang, lebih direkomendasikan 
let fullName = "Prajna paramitha"

// 3. Var : lingkup fungsi dan udah ga direkomendasikan soalnya suka nyebabin bug di javascript. bisa di panggil ulang
var name = "Nana"
const nim = 231104016 // gak bisa diubah-ubah nilainya
console.log(name)
// template literal jadi pemanggilanya pake backlip
// keunggulan literal itu dia buat new line tinggal di enter aja ga perlu /n
console.log(`Nama saya ${name}
Nim saya adalah ${nim}`)