let numeroSecreto = 0;
let intentos = 3;
// este código es para evitar que el numero sorteado se repita en el segundo intento
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Adivinaste el número! y en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sortemos todos los numeros del 1 al 10
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

    } else {
        
        //Sí el número generado está incluido en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1' , 'Juego del número secreto');
    asignarTextoElemento('p' , `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //1ro Limpiar caja
    limpiarCaja();
    //2do Indicar mensaje de instrucciones del juego    
    //3ro Generar nuevo número aleatorio
    //4to Inicializar el número de Intentos
    condicionesIniciales();
    //5to Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
