const saldo=600;
const pagar=500;
const tarjeta=true;

/*
|| es un or que al menos una se cumpla
&& es un and y es para que ambos se cumplan
*/

if(saldo>pagar || tarjeta){
    console.log('puedes pagar');
}else{
    console.log('no puedes pagar');
}