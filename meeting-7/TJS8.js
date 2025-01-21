// Soal 1
// pertanyaan !
let scoreAndi = 81;

if (scoreAndi >= 91) {
    console.log('Grade A');
} else if (scoreAndi >= 81) {
    console.log('Grade B');
} else if (scoreAndi >= 71) {
    console.log('Grade C');
} else {
    console.log('Grade D');
}
// Pertanyaan 2
scoreAndi >= 91 ? console.log("Grade A"): 
scoreAndi >= 81 ? console.log("Grade B"):
scoreAndi >= 71 ? console.log("Grade C"):
console.log('Grade D');

// Soal Kedua
let belanjaanPergi = 'Nangka'
let belanjaanPulang = 'Salak'

switch (belanjaanPergi) {
    case "Cherry":
        console.log("Dia Membeli Cherry");
        break;
    
    case "Nangka":
        console.log('Dia Membeli Nangka');
        break;
    
    case "Salak":
        console.log('Dia Membeli Salak');
        break;
    
    case "NangkaDanSalak":
        console.log('Dia Membeli Nangka dan Salak');
        
        break;
    
    default:
        console.log('Dia Tidak Membeli Apapun');
        break;
}

switch (belanjaanPulang) {
    case 'Salak':
        console.log('Dia Membeli Salak 2KG');
        break;

    default:
        console.log('Tidak Membeli Apapun');
}


// Soal 3
let saklar = true;

if (saklar) {
    console.log('Saklarnya Hidup');
} else {
    console.log('Saklarnya Mati');
}
