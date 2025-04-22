const fs = require('fs');

function ReadJSON() {
    const data = fs.readFileSync('tp7_1_2311104016.json', 'utf8');
    const mhs = JSON.parse(data);

    console.log(`Nama ${mhs.nama.depan} ${mhs.nama.belakang} dengan nim ${mhs.nim} dari fakultas ${mhs.fakultas}`);
}

ReadJSON();