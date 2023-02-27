let num = 3;
let num1 = 3;
let num2 = 8;
let linea = "------";

// Ejemplo//
if (num1 > 1) {
  console.log(`${num1} es mayor que 1`);
}
if (num2 > 1) {
  console.log(`${num2} es mayor que 1`);
}

//     Ejemplo 1//
console.log(`${linea} ejemplo 1 ${linea}`);

if (num1 < 1) {
  console.log(`${num1} es menor que 1`);
} else {
  console.log(`${num1} es mayor que 1`);
}

//      Ejemplo 2//
console.log(`${linea} ejemplo 2 ${linea}`);

if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else {
  console.log(`${num1} es menor que ${num2}`);
}

//       Ejemplo 3//
console.log(`${linea} ejemplo 3 ${linea}`);

if (num > num1) {
  console.log(`${num} es mayor que ${num1}`);
} else if (num < num1) {
  console.log(`${num} es menor que ${num1}`);
} else {
  console.log(`${num} es igual a ${num1}`);
}

//       Ejemplo 4//
console.log(`${linea} ejemplo 4 ${linea}`);

if ((num1 > 5) & (num2 > 5)) {
  console.log(`${num1} y ${num2} son mayores que 5`);
} else {
  console.log(`${num1} o ${num2} no son mayores que 5`);
}

//       Ejemplo 5//
console.log(`${linea} ejemplo 5 ${linea}`);

if (num1 > 5 || num2 > 5) {
  console.log(`${num1} 0 ${num2} son mayores que 5`);
}

/*
ordenar 3 numeros de mayor a menor
Permutacion con 3  elementos
Posibilidad 3! = 3*2*1 = 6
abc ~ 321
acb ~ 312
bac ~ 231
bca ~ 132
cab ~ 213
cba ~ 123
*/

const numbers = document.getElementById("numero");
const result = document.getElementById("resultado");

let a = prompt("introduzca el primer numero");
let b = prompt("introduzca el segundo numero");
let c = prompt("introduzca el tercer numero");

numbers.textContent = `los numeros introducidos son ${a},${b},${c}`;

/* Ejecicio */

if (a >= b && a >= c) {
  if (b >= c) {
    result.textContent = `el orden es: ${a},${b},${c}`;
  } else {
    result.textContent = `el orden es: ${a},${c},${b}`;
  }
} else if (b >= a && b >= c) {
  if (a > c) {
    result.textContent = `el orden es: ${b},${a},${c}`;
  } else {
    result.textContent = `el orden es: ${b},${c},${a}`;
  }
} else if (c >= a && c >= b) {
  if (a > b) {
    result.textContent = `el orden es: ${c},${a},${b} `;
  } else {
    result.textContent = `el orden es: ${c},${b},${a}`;
  }
}
