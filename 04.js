//Objetos


//variables
//const nombre = "Tablet";
//const precio = 300;
//const disponible = true;


//objeto producto
const producto = {
    nombre: "Tablet",
    precio:300,
    disponible:true
}

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Destructuring es:
//const { imagen } = producto; añade imagen al objeto producto
//console.log(imagen);

//extrae la propiedad del objeto
const {nombre,precio,disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

//Object literal Enhacement
const autenticado = true;
const usuario = 'rick';
const nuevoObjeto = {
    autenticado:autenticado,
    usuario:usuario
}
console.table(nuevoObjeto);