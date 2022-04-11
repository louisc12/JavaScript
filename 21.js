//Scope o Alcance de una variable

const precio =300;

function unaFuncion(){
    const precio = 600;
    console.log(precio)
}
unaFuncion();
console.log(precio);