let Perceptron = require("./perpeptron");
let learningRate = require("./learningRate");

let datosEntrenos = [
    {input:[80,2,100],output:[400]},
    {input:[60,2,900],output:[400]},
    {input:[90,3,250],output:[400]},
    {input:[55,2,350],output:[400]},
    {input:[30,1,520],output:[400]},
    {input:[80,4,700],output:[430]},
    {input:[65,2,700],output:[250]},
    {input:[120,3,400],output:[492]},
    {input:[100,4,800],output:[355]},
    {input:[75,1,650],output:[200]},
];

let and = [
    {input:[0,0],output:[0]},
    {input:[0,1],output:[0]},
    {input:[1,0],output:[0]},
    {input:[1,1],output:[1]}
];

let or = [
    {input:[0,0],output:[0]},
    {input:[0,1],output:[1]},
    {input:[1,0],output:[1]},
    {input:[1,1],output:[1]}
];

let xor = [
    {input:[0,0],output:[0]},
    {input:[0,1],output:[1]},
    {input:[1,0],output:[1]},
    {input:[1,1],output:[0]}
];

let datosEntreno=or;
let perceptron = new Perceptron('escalon');
lr = new learningRate();
lr.initLearningRate(perceptron,datosEntreno);
let tasa = lr.lr;
console.log("Entra");
perceptron.loadTrainData(datosEntreno);
perceptron.initPesos();
/*let net = perceptron.net([75,1,650]);
let out = perceptron.out(net);
let error = perceptron.error([200],out);*/
perceptron.train(100,tasa,true);


