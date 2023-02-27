
// como obtener valores de un input type text
// form 1
{

    const enviarDatos = (precio,cantidad) => {
        let obtenerprecio = document.getElementById("precio")
        let Obtnercantidad = document.getElementById("cantidad")
        precio = obtenerprecio.value
        cantidad = Obtnercantidad.value
        console.log(precio)
        console.log(cantidad)
        console.log(precio * cantidad)
    }
}
//form 2
{
    // obteniendo valores desde input de type Button
    let Buno = document.getElementById("uno").value
    let Bdos = document.getElementById("dos").value
    let datosprecio = Buno
    let datoscantidad = Bdos
    
    let datos = [datosprecio, datoscantidad]
    
    console.log(`${Buno + Bdos} suma del form 2`)
    
}
//form 3
{

    let nada = document.getElementById("nada")
    console.log(`${nada.value} <--- valor de Form 3`)
    
}

//form 4
{

    let Datos1 = ""
    let Datos2 = ""
    const dato1 = document.getElementById('dato1')
    const dato2 = document.getElementById('dato2')
    const enviar = document.getElementById('enviar')
    
    const calcularSuma = () => {
        let suma = Datos1 + Datos2 
        console.log(suma)
    }
    
    enviar.addEventListener('click',(e) => {
        e.preventDefault()
        if(dato1.value.length >= 1 & dato2.value.length >= 1){
            Datos1 = parseInt(dato1.value)
            Datos2 = parseInt(dato2.value)
        
            if(Datos1 > Datos2) console.log(`el valor ${Datos1} es mayor a ${Datos2}`)
            else if (Datos1 < Datos2) console.log(`el valor ${Datos1} es menor a ${Datos2}`)
            else console.log(`los valores ${Datos1} y ${Datos2} son iguales`)
            
            calcularSuma()
        }
        
        else{ 
            console.log(`complete todos los campos`)
        }
        
    })
    calcularSuma()
    
}

//form 5
{

    
}



