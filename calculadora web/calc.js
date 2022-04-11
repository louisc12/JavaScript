//capturando elementos del DOM (basicamente ubicar elementos del html y guadarlos en JS)
const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
//variables globales
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

//agregando eventos(basicamente capturar alguna accion que haga el usuario en el documento y realizar alguna accion)
botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton) {
    boton.addEventListener('click', function() {
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function() {
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function() {
    clearDisplay();
    actualizarDisplay();
});

//programar las funciones
function selectOperacion(ope) {
    if (opeActual == '') return;
    if (opeActual != '') {
        calcular();
    }
    operacion = ope.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clearDisplay() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clearDisplay();