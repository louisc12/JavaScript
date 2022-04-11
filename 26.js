//Eventos del DOM - submit
const formulario = document.querySelector('#formulario');// #es para id y .es para clases
formulario.addEventListener('submit',e=>{
    e.preventDefault()
    const nombre = document.querySelector('.nombre').value;
    console.log(nombre)
    const password = document.querySelector('.password').value;
    if(nombre === '' || password ===''){
        console.log('todos los campos son obligatorios')
    }else{
        console.log('todo bien')
    }
});