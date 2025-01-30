// Soal 1
function greet() {
    console.log("Hello, World!");
}

greet()

// Soal 2

function showMessage() {
    let message = "Ini adalah pesan lokal";
    console.log(message);
}

// console.log(message);

// Soal 3
let username = "Guest";
function updateUsername() {
    console.log(username);

    // Update
    username = "Admin";
}
console.log(username);

updateUsername();
console.log(username);

// Soal 4 (skip)

// Soal 5
function greetment(name = "Yukimiya") {
    console.log(`Hello, ${name}!`);
}
greetment();

// Soal 6
function setUser (userName){
    userName = userName ?? "Guest"

    console.log(`Hello, ${userName}`);
}
setUser();
setUser("Yukimiya");

// Soal 7 
function add(paramOne, paramTwo) {
    return paramOne + paramTwo;
    }
    console.log(add(10, 7));  
