//Funciones - Function Declaration
/*function sumar(numero=0,numero2=0){
    console.log(numero+numero2);
}
sumar(5,10);
sumar(55,100);
sumar(3);
sumar();
*/

function sumar(numero=0,numero2=0){
    return [numero+numero2,'Hola Mundo!'];
}
const [resultado,res] = sumar(20,30);
console.log(resultado);
console.log(res);