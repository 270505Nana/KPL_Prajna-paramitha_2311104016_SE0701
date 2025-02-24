//  ada 3 jenis function
// 1 Anonymous function
// 2 Named function
function perkalian(a,b){
    let result = a*b
    return result
}
// 3 expresif function/arrow function
// anonymous function
const pertambahan = (a,b) => {
    // => : namanya arror function
    let result = a+b
    return result
}

// named expression function
const pembagian = function bagi(a,b){
    let result = a/b
    return result
}

console.log(perkalian(5,2))
console.log(pertambahan(5,5))
console.log(pembagian(10,2))