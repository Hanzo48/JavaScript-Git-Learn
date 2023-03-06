//   Ejercicio 1

// let nombre = prompt('introduzca su nombre');
// let edad = prompt('introduzca su edad');
// let edad2 = 1
// console.log(`hola ${nombre}, tienes ${edad} años y el año que viene tendras ${parseInt(edad) + edad2} años`);

// console.log(edad + edad2 + ` <-- aca el resultado no se suma porque edad se interpreta como una variable string, para que que se pueda sumar hay que usar "parseInt" `)

//    Ejercicio 2 usando IF

// let geo = prompt('Introduzca la geometria que deseada calcular su area "triangulo - rectangulo - circulo" ')

// if(geo == 'triangulo'){
//     let b = prompt('Introduzca el valor de B')
//     let h = prompt('Introduzca el valor de h')
//     console.log(`el area de del triangulo es ${h*b/2}`)
// }else if(geo == 'rectangulo'){
//     let b = prompt('Introduzca el valor de B')
//     let h = prompt('Introduzca el valor de h')
//     console.log(`el area de del rectangulo es ${h*b}`)
// }else if(geo == 'circulo'){
//     let r2 = prompt('introduzca el valor del radio')
//     console.log(`el area del circulo es de ${Math.PI * Math.pow(r2,2)}`)
// }else
// console.log('no ingreso ninguna geometria correctamente')

//    Ejercicio 2 usando switch

// let figure = prompt('Introduce la figura geómetrica de la que quieres calcular el área: triangle, rectangle or circle')

// let base;
// let height;
// let radius;

// switch(figure){
//     case 'triangle':
//         base=prompt('Introduce la base del triángulo')
//         height=prompt('Introduce la altura del triángulo')
//         console.log(`El área del triángulo es ${(base*height)/2}`);
//         break
//     case 'rectangle':
//         base=prompt('Introduce la base del rectángulo')
//         height=prompt('Introduce la altura del rectángulo')
//         console.log(`El área del rectángulo es ${base*height}`);
//         break
//     case 'circle':
//         radius=prompt('Introduce el radio del círculo')
//         console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
//         break
//     default: console.log('La figura geométrica no es válida');

// //    Ejercicio 3

let num = parseInt(prompt("ingrese un Valor numerico"));

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    // aca lo realmente importante
    console.log(`${i} es par`);
  } else console.log(`${i} es inpar`);
}
