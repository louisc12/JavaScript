//Manipular elementos html con JS

const heading = document.querySelector('#heading');
heading.textContent = 'Nuevo Heading'
console.log(heading);

const inputNombre = document.querySelector('#nombre');
inputNombre.value='un valor por defecto';
console.log(inputNombre);

const enlances = document.querySelectorAll('.navegacion a');
enlances.forEach(enlace => enlace.textContent='Nuevo Enlace');