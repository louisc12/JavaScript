//Objetos - unir dos objetos

const producto = {
    nombre: "Tablet",
    precio:300,
    disponible:true
}

const cliente ={
    nombre:'Rick',
    premium:true
}

//const nuevoObjeto = Object.assign(producto,cliente); esta no porque modifica la informacion de los objetos
//forma 1 const nuevoObjeto2 = {...producto,...cliente}//los 3 puntos es para indicar que tomara una copia de lo que le indiquemos
const nuevoObjeto2 = {
    producto:{...producto},
    cliente:{...cliente}
}
console.log(nuevoObjeto2);