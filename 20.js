//Ternario - ?

const autenticado=true;

//condicion    aqui es lo que se ejecuta si se cumple   aqui se ejecuta en caso de no cumplir
autenticado ?   console.log('usuario autenticado')    :  console.log('usuario no autenticado') 

//Doble ternario
const saldo=600;
const pagar=500;
const tarjeta=true;
saldo > pagar ? console.log('puedes pagar') : tarjeta ? console.log('puedes pagar') : console.log('no puedes pagar')