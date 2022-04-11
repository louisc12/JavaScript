//Eventos del DOM - clicks
/*
const heading = document.querySelector('.heading');
heading.addEventListener('click',clickHeading)

function clickHeading(){
    console.log('Diste click en heading');
}
*/
const heading = document.querySelector('.heading');
heading.addEventListener('click',()=>{
    heading.textContent = 'Nuevo Heading'
})

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click',()=>{
        console.log('Diste un click en el enlace');
    })
})


