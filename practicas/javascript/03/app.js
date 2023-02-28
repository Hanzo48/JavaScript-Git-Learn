const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const incrustar = document.getElementById('incrustar')


// Itext = ""

 form[1].addEventListener('click',(e) => {
        // e.preventDefault()    
        const Itext = form[0].value
        form[0].value = ''
        // form.classList.add('bckcolor')
        const ItemList = document.createElement('li')
        ItemList.textContent = Itext
        incrustar.children[0].appendChild(ItemList)
        console.log(ItemList.textContent)
})

// console.log(Itext)
// input.addEventListener('keyup',(e)=>{
//     console.log(e)
    
// })

// console.log(incrustar.children[0])




// input.addEventListener('keyup', (e) => {
    //     console.log(e.key)    
    // })
    
    