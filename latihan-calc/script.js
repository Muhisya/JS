function numberOne() {
  let getElement = document.getElementById("display").innerText;
//   console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 1;
  document.getElementById("display").innerText = total;
}

function numberTwo() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 2;
  document.getElementById('display').innerText = total;
}

function numberThree() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 3;
  document.getElementById('display').innerText = total;
}

function numberFour() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 4;
  document.getElementById('display').innerText = total;
}

function numberFive() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 5;
  document.getElementById('display').innerText = total;
}

function numberSix() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 6;
  document.getElementById('display').innerText = total;
}

function numberSeven() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 7;
  document.getElementById('display').innerText = total;
}

function numberEight() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 8;
  document.getElementById('display').innerText = total;
}

function numberNine() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 9;
  document.getElementById('display').innerText = total;
}

function numberZero() {
  let getElement = document.getElementById("display").innerText;
  console.dir(getElement);
  if (getElement == '0') {
    getElement = ' ';
  }
  let total = getElement + 0;
  document.getElementById('display').innerText = total;
}

function tambah() {
  let getElement = document.getElementById('display').innerHTML;
  let total = getElement + ' + ';
  document.getElementById('display').innerHTML = total;
}

function kurang() {
  let getElement = document.getElementById('display').innerHTML;
  let total = getElement + ' - ';
  document.getElementById('display').innerHTML = total;
}

function kali() {
  let getElement = document.getElementById('display').innerHTML;
  let total = getElement + ' * ';
  document.getElementById('display').innerHTML = total;
}

function bagi() {
  let getElement = document.getElementById('display').innerHTML;
  let total = getElement + ' / ';
  document.getElementById('display').innerHTML = total;
}

function total() {
  let getElement = document.getElementById('display').innerHTML;
  console.log(getElement);

  // kondisi
  if (getElement.includes('+')) {
    let parts = getElement.trim().split('+');
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 + operand2;
    console.log(total);
    document.getElementById('display').innerHTML = total;
  } 
  if (getElement.includes('-')) {
    let parts = getElement.trim().split('-');
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 - operand2;
    console.log(total);
    document.getElementById('display').innerHTML = total;
  } 
  if (getElement.includes('*')) {
    let parts = getElement.trim().split('*');
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 * operand2;
    console.log(total);
    document.getElementById('display').innerHTML = total;
  } 
  if (getElement.includes('/')) {
    let parts = getElement.trim().split('/');
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 / operand2;
    console.log(total);
    document.getElementById('display').innerHTML = total;
  } 
}

function deleteLast() {
  let num1 = document.getElementById('display').innerHTML ;
  let numbers = num1.trim().slice(0, -1);
  document.getElementById('display').innerHTML = numbers;
}

function clearDisplay() {
  let num1 = document.getElementById('display').innerHTML = total;
  numbers = 0;
  document.getElementById('display').innerText = numbers;
}
