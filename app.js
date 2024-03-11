let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el Numero en ${intentos} ${(intentos=== 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero Secreto es Menor');
        } else {
            asignarTextoElemento('p', 'El numero Secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == 10) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function mensajesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
}

function reiniciarJuego() {
    //limpiar la cajita
    limpiarCaja();
    //indicar mensaje de inicio 
    mensajesIniciales();
    //Generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //Inicializar el numero de Intentos
    intentos = 1;
}

asignarTextoElemento('h1', 'Juego del Numero Secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');