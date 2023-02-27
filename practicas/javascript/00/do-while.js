// let pass = '';
let Gpass = "hola";

// while(pass !='hola'){
// pass = prompt('Introduzca su contraseña')
// }

do {
  pass = prompt("Introduzca su contraseña");
} while (pass != `${Gpass}`);

console.log("fin del bucle");
