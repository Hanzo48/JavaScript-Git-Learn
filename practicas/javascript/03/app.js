const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const incrustar = document.getElementById('incrustar')


Itext = ""

 form[1].addEventListener('click',(e) => {
        // e.preventDefault()    
        const Itext = form[0].value
        form[0].value = ''
        // form.classList.add('bckcolor')
        const ItemList = document.createElement('li')
        ItemList.textContent = Itext
        incrustar.children[1].appendChild(ItemList)
        // console.log(ItemList.textContent)
})

// console.log(Itext)
// input.addEventListener('keyup',(e)=>{
//     console.log(e)
    
// })

// console.log(incrustar.children)

// input.addEventListener('keyup', (e) => {
    //     console.log(e.key)    
    // })

const formQA = document.getElementById('formQA')
const IncrusResul = document.getElementById('IncrusResul')
const span = document.getElementById('span')
let pregunta = formQA.children[0]
// pregunta.textContent = 'No se que poner por ahora'

formQA[1].addEventListener('click', (e) => {
    const resp = formQA[0].value
    formQA[0].value = ''
    console.log(resp)
    if(resp == 4){ 
        console.log('respuesta correcta')
        const resultado = document.createElement('p')
        resultado.textContent = `correcto la suma de 2+2 es ${resp}`
        span.textContent = resp
        IncrusResul.children[0].appendChild(resultado)

    }
    else{
    const error = document.createElement('p')
    error.textContent = `${resp} no es la respuesta correcta, vuelva a intetentar`
    span.textContent = resp
    IncrusResul.children[0].appendChild(error)
    
    console.log(`${resp} no es la respuesta correcta, vuelva a intetentar`)
    }

})




// console.log(formQA)
// console.log(formQA[0].value)
// console.log(formQA[1])
// console.log(formQA.children[0].textContent)
// console.log(IncrusResul)



    
    