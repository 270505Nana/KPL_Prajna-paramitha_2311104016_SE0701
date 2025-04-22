// Import module 'fs' dari Node.js 
const fs = require('fs');

class GlossaryItem12345678 {
    static readJSON(filePath) {
        try {
            // baca berdasarkan file yang kita lampirin, jadi nama harus benar
            const jsonData = fs.readFileSync('jurnal7_3_231104016.json', 'utf-8');

            // Parse/ubah string JSON jadi objek JavaScript
            const obj = JSON.parse(jsonData);

            // Masuk ke dalam struktur JSON dan ambil bagian "GlossEntry" aja
            const entry = obj.glossary.GlossDiv.GlossList.GlossEntry;

            // Tampilkan data yang udah diambil ke terminal
            console.log("=== GlossEntry Deserialized Output ===");
            console.log(`ID: ${entry.ID}`);                     
            console.log(`SortAs: ${entry.SortAs}`);           
            console.log(`GlossTerm: ${entry.GlossTerm}`);        
            console.log(`Acronym: ${entry.Acronym}`);     
            console.log(`Abbrev: ${entry.Abbrev}`);                     
            console.log(`GlossDef: ${entry.GlossDef.para}`);       
            console.log(`GlossSeeAlso: ${entry.GlossDef.GlossSeeAlso.join(', ')}`); 
            console.log(`GlossSee: ${entry.GlossSee}`);                 

        } catch (err) {
            console.error("Error reading or parsing file:", err.message);
        }
    }
}
GlossaryItem12345678.readJSON('data.json');
