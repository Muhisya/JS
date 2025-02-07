// Declaration Function
function calculateArea(length, width) {
    return length * width;
}

// Expression Function
let calculateArea2 = function (length, width) {
    console.log("Expretion Function");
}
calculateArea2();

// Arrow Function
let calculateArea3 = (length, width) => {
    console.log("Arrow Function");
}
calculateArea3();