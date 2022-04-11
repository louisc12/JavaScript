//Comparacion y Operador estricto
const numero = 20;
const numero2='20';
/**
 == - es de comparacion no estricta
 === - es comparacion estricta(revisa por el valor y el tipo de dato)
 */
if(numero===Number(numero2)){
    console.log('si son iguales')
}else{
    console.log('no son iguales')
}