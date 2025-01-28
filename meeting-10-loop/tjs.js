let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

let b = 10;
do {
    console.log(b);
    b--;
} while (b >= 1);

for (let c = 2; c <= 20; c+=2) {
    console.log(c);
}

for (let d = 1; d <= 10; d++) {
    if (d === 5) continue;
    console.log(d);
}

for (let e = 1; e <= 10; e++) {
    if ( e === 10) continue;
    if (e === 7) break;
    console.log(e);
}