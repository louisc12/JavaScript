const tecnologias = ['HTML','CSS','JavaScript','React','NodeJS'];
const nuemeros = [10,20,30];

//Filter
let nuevoArray;
nuevoArray = tecnologias.filter(tech=>tech !== 'React');

//include - es para verificar que un elemento existe en el Array
//const resultado = tecnologias.includes('React');

//some - devuelve si al menos un elemento cumple la condicion
//const resultado = nuemeros.some(numero => numero>15);

//Find - devuelve el primer elemento que si cumple la condicion
//const resultado = nuemeros.find(numero => numero>15);

//Every - retorna true o false si todos cumple la condicion
//const resultado = nuemeros.every(numero => numero>15);

//Reduce - Acumula en la variable total e inicia en 0
//const resultado = nuemeros.reduce((total,numeroActual)=>numeroActual+total,0);

//Filter - Crea un nuevo Array apartir de una condicion 
//const resultado = tecnologias.filter(tech => tech === 'NodeJS');
//const resultado2 = nuemeros.filter(num => num > 15);

//ForEach - solo es para iterar por cada uno de los elementos
tecnologias.forEach((tech,index) => console.log(index,tech));

//Map - retorna un nuevo Array
const resultado = tecnologias.map(tech => tech);

console.log(resultado);
