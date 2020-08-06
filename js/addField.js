const buttonAddTime = document.querySelector('#add-time')
buttonAddTime.addEventListener('click', cloneField)


function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach((field) =>{
        field.value = ""
    })

    //Colocar na pagina

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
