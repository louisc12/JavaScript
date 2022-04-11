const LayerDense = require("./LayerDense");
const SoftmaxLayer = require('./SoftmaxLayer');
const Mathjs = require("mathjs");
const fs = require('fs');
class NeuralNetwork{
    constructor(layers=[],numEntradas){
        this.layers=[];
        this.datosEntreno=[];
        this.layersparameter=layers;
        this.numEntradasparameter=numEntradas;
        this.reload(layers,numEntradas);
    }

    reload(layers,numEntradas){
        let count=0;
        layers.forEach(element =>{
            let entradas=null;
            if(count==0){
                entradas=numEntradas;
            }else{
                entradas=this.layers[count-1].m;
            }
            if(element.type=='densed'){
                this.layers.push(new LayerDense(entradas,element.m,element.act,element.momento));
            }else if(element.type=='softmax'){
                this.layers.push(new SoftmaxLayer(entradas,element.m,element.act,element.momento));
            }
            count++;
        });
    }

    loadTrainData(datosEntreno=[]){
        this.datosEntreno=datosEntreno;
    }

    initPesos(){
        this.layers.forEach(element=>{
            element.initPesos();
        });
    }
    forward(input=[]){
        let x= input;
        this.layers.forEach(element=>{
            x=element.forward(x)
        });
        return x;
    }
    error(outEsp,out){
        return Mathjs.subtract(outEsp,out);
    }
    errorAbsoluto(error=[]){
        let errorAbsoluto =0;
        for(let i=0;i<error.length;i++){
            errorAbsoluto += Math.abs(error[i]);
        }
        return errorAbsoluto;
    }
    backward(error=[]){
        let posUltima=this.layers.length -1;
        for(let i=posUltima;i>=0;i--){
            error = this.layers[i].backward(error);
        }
    }

    update(lr){
        for(let i=0;i<this.layers.length;i++){
            this.layers[i].update(lr);
        }
    }

    train(epocas,lr,debug=false){
        let numDatos = this.datosEntreno.length;
        let registroErrores = [];
        for(let i=0;i<epocas;i++){
            let errorEpoca = 0;
            this.datosEntreno.forEach(element =>{
                let input = element.input;
                let outEsp = element.output;
                let out = this.forward(input);
                let error = this.error(outEsp,out);
                errorEpoca = errorEpoca + this.errorAbsoluto(error);
                this.backward(error);
                this.update(lr);
            });
            let errorMedio = errorEpoca/numDatos;
            registroErrores.push(errorMedio);
            if(debug){
                console.log("Epoca " + i + " " + errorMedio);
            }
            if(errorEpoca==0){
                break;
            }
        }
        return registroErrores;
    }

    save(file="neural-network.json"){
        let save={
            'layers':this.layers,
            'layerspatameter':this.layersparameter,
            'numEntradasparameter':this.numEntradasparameter
        };
        let data = JSON.stringify(save);
        fs.writeFileSync(file,data);
    }


    load(callback,file="neural-network.json"){
        fs.readFile(file,(err,data)=>{
            if(err) throw err;
            let datos = JSON.parse(data);
            this.reload(datos.layersparameter,datos.numEntradasparameter);
            for(let i =0;i<this.layers.length;i++){
                let currentLayer = this.layers[i];
                for(let prop in currentLayer){
                    currentLayer[prop]=datos.layers[i][prop];
                }
            }
            callback();
        });
    }
}

module.exports = NeuralNetwork;