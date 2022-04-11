//funciones - Arrow Function

//Function expression
/*const sumar = function(){
    console.log(numero*numero2);
}
*/

//Arrow Function
const sumar = (numero=0,numero2=0) => {
    return numero+numero2;
}

const resultado = sumar(20,40);
console.log(resultado);