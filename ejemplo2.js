const NeuralNetwork = require("./NeuralNetwork");

let xor = [
    {input:[0,0],output:[0]},
    {input:[0,1],output:[1]},
    {input:[1,0],output:[1]},
    {input:[1,1],output:[0]}
];

let layers = [
    {
        'type':'densed',
        'm':4,
        'act':'escalon',
        'momento':0.05
    },
    {
        'type':'densed',
        'm':1,
        'act':'escalon',
        'momento':0.02
    }
];
let redNeuronal = new NeuralNetwork(layers,2);
redNeuronal.initPesos();
redNeuronal.loadTrainData(xor);
redNeuronal.train(10000,0.008,true);
console.log(redNeuronal.forward(xor[2].input));

/* como guardar una red entrendada
redNeuronal.save("nombre.json");
*/

/* como cargar una red ya entrenada
redNeuronal.load(function(){
    let salida = redNeuronal.forward(xor[3].input);
    console.log(salida);
},"nombre.json");
*/