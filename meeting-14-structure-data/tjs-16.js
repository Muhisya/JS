// ! 1. Tugas
let penduduk  = {
    namaDepan: "Slemet",
    namaBelakang: "Santoso",
    umur: 45,
    perkerjaan: "petani",
}
// * 1.1 menambahkan property
penduduk.kota = "yogyakarta";
// * 1.2 teknik desturucturing
let {namaBelakang} = penduduk;
    console.log(namaBelakang);
// * 1.3 teknik dot notation
console.log(penduduk.perkerjaan);

// ! 2. Tugas
let buahFavorit = ["Mangga", "Jeruk", "Apel"]; 
// * 2.1 Tambah buah
buahFavorit.push("Pisang");
// * 2.2 Mengubah buah
buahFavorit[1] = "Anggur";   
// * 2.3 Menghapus buah
buahFavorit.pop();
console.log(buahFavorit);

// ! 3. tugas
let menuRestoran = new Map([
    ["Nasi Goreng", 15000],
    ["Mie Ayam", 13000],
    ["Es Teh Manis", 5000]
])

// * 3.1 menambahkan menu
menuRestoran.set("Ayam Bakar", 20000);
// * 3.2 menampilkan menu
let getMenu = menuRestoran.get("Mie Ayam");
console.log(getMenu);
// * 3.3 menghapus menu
menuRestoran.delete("Es Teh Manis");
console.log(menuRestoran);


// ! 4. tugas
let koleksiBuku = new Set(["laster pelangi", "Bumi", "Hujan"]);

// * 4.1 memenambahkan buku
koleksiBuku.add("Filsofi Teras");
// * 4.2 memnambahkan buku
koleksiBuku.add("Bumi");
console.log(koleksiBuku);
// * 4.3 menghapus buku
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);


// ! 5. tugas
let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = ["Blouse", "Rok", "Cardingan"];

// * 5.1 Gabungkan pakaian pria dan wanita
const pakaianToko = [...pakaianPria, ...pakaianWanita];
// * 5.2 menambahkan pakaian
pakaianToko.push("Kaos");
// * 5.3 menampilkan pakaian
console.log(pakaianToko);


// ! 6. tugas
function pesanMakanan(...params) {
    console.log("Nasi Goreng", "Sate Ayam", "Es Teh Manis");
}
pesanMakanan();