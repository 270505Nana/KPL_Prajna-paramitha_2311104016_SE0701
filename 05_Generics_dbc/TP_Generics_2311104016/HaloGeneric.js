class HaloGeneric {
    // Method dengan parameter generic
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Fungsi utama
function main() {
    // Membuat objek dari kelas HaloGeneric
    const halo = new HaloGeneric();
    
    // Memanggil method SapaUser dengan input String nama nana
    halo.SapaUser("Nana");
}

main();