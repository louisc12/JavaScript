//Desctructuring de Arrays

const tecnologias = ['HTML','CSS','JavaScript','React','NodeJS'];

//const [var1,var2,var3,var4,var5] = tecnologias;
const [,,,,var5] = tecnologias;

console.log(var5);

const cliente = {
    nombre:'Rick',
    tipo:'Premium'
}

const {tipo} = cliente;
console.log(tipo);