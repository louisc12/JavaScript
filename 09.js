//operaciones en los arreglos

const tecnologias = ['HTML','CSS','JavaScript','React','NodeJS'];

//Añadir elementos al Array
//tecnologias.push('GraphQL');//lo añade al final del Array
//tecnologias.unshift('GraphQL');//lo añade al principio del Array
const nuevoArreglo=['GraphQL',...tecnologias];

//Eliminar elementos del Array
//tecnologias.pop();//elimina del final
//tecnologias.shift();//elimina del inicio
//tecnologias.splice(2,1);//elimina de una pocision especifica 
const nuevoArray = tecnologias.filter(function(tech){
    return tech === 'React'
})

//Reemplazar elementos del Array
//tecnologias[0] = 'GraphQL'
const nuevo = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})


console.log(tecnologias);
console.table(nuevo);
