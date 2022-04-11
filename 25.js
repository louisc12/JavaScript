//Eventos del DOM - inputs
 const inputNombre = document.querySelector('.nombre');
 //inputNombre.placeholder='un placeholder desde JS';
 //inputNombre.type='password';
 inputNombre.addEventListener('input',function(e){//captura los eventos al escribir
     console.log('escribiendo en el input');
     console.log(e.target.value);
 });

/* inputNombre.addEventListener('keydown',function(){//cuando escribres o presionas una tecla
    console.log('escribiendo en el input');
});*/

/*inputNombre.addEventListener('keyup',function(){//cuando presionas y levantas la tecla
    console.log('escribiendo en el input');
});*/

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input',funcionPassword);

function funcionPassword(e){
    inputPassword.type='text'
    setTimeout(()=>{
        inputPassword.type='password'
    },1000)
}