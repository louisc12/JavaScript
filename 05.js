//Objetos - Manipulacion

const producto = {
    nombre: "Tablet",
    precio:300,
    disponible:true
}
//que un objeto no cambie es
//metodo 1 es Object.freeze que no deja modificar nada
//Object.freeze(producto);
//metodo 2 es Object.seal que permite reescribir las propiedades pero no añadir nuevas ni eliminarlas
Object.seal(producto);

//Reescribir un valor
producto.nombre = 'Monitor curvo';
//Agrega una propiedad al objeto(si no existe lo va a crear)
producto.imagen = 'imagen.jpge';

//eliminar propiedades
delete producto.disponible;

console.table(producto);