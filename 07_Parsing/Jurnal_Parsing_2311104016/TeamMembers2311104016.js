const fs = require('fs');

class TeamMembers {
    static ReadJSON() {
        // Baca file JSON
        const data = fs.readFileSync('jurnal7_2_2311104016.json', 'utf8');

        // Ubah jadi object JavaScript
        const obj = JSON.parse(data);

        // Ambil array members
        const members = obj.members;

        // Cetak data anggota tim
        console.log('Team member list:');
        members.forEach(member => {
            const fullName = `${member.firstName} ${member.lastName}`;
            const nim = member.nim;
            const age = member.age;
            const gender = member.gender;

            console.log(`${nim} ${fullName} (${age} ${gender})`);
        });
    }
}

// Panggil method-nya
TeamMembers.ReadJSON();
