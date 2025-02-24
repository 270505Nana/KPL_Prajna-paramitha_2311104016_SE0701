let globalVariable = "Nana"

function getMyIdentity(){
    let localVariable = 2311104016

    console.log(`Nama saya ${globalVariable} nim ${localvariable}`)
}

console.log(globalVariable)
// console.log(localVariable)

// global variable bisa dipanggil di semua fungsi, as the name lah ya
// local : cuma bisa didalam functionnya, gak bisa dipanggil di luar function
getMyIdentity()