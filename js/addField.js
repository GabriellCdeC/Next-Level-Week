const buttonAddTime = document.querySelector('#add-time')
buttonAddTime.addEventListener('click', cloneField)


function cloneField(){
    const addTimeCopy = document.querySelector('.schedule-item').cloneNode(true)

    //Colocar na pagina

    document.querySelector('#schedule-items').appendChild(addTimeCopy)
}
