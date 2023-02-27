// `bucle subir vida`


// let vida = 100

// // for(vida; vida>=0; vida -= 3){
// //       console.log(vida)
    
      
// // }
// let vida0 = 100
//       do {
//         (vida0 -= 2.5)
//         console.log(vida0)
//     } while (vida0 > 0)


//     let vida1 = 0

//     do {(vida1 += 4)
//         console.log(vida1)
    // }while (vida1 < 100)


// }

// `bucle 2 subir vida `
let vida = 30

function masvida() {
    var subirvida = (vida += 5);
    // console.log(subirvida);
}

const perdervida = setInterval(() => {
    console.log(vida)
    vida -= 3  
    if(vida < 0)
    clearInterval(perdervida)
}, 3000);

console.log(vida + subirvida)

// let moneda = 1

// for(i=0; i<= 30 ; i +=1){
//     moneda *=2
//     console.log(moneda)
// }

  

