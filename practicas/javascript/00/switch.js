let numero = 5

switch(numero){
    case 1:
        console.log(`${numero} tiene el valor 1`)
    break;
    case 2:
        console.log(`${numero} tiene el valor 2`)
    break;
    default: 
        console.log(`${numero} no vale 1 ni 2`)
}

switch(numero){
    case 1:
    case 3:
    case 5:
        console.log(`${numero} es impar`)
    break;
    case 2:
    case 4:
        console.log(`${numero} es par`)
}