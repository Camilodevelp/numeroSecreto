let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let reinicios = 0;

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto
return;
    
}

function verificarIntento() {
    // alert ("estoy funcionando")
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ("p", "El número es menor");
        }else {
        asignarTextoElemento ("p", "El número es mayor");
        }
        intentos++
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}

function asignarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo ) {
        asignarTextoElemento("p", "Ya todos los numeros fueron sorteados")
    } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return asignarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Bienvenido al juego del numero secreto")
    asignarTextoElemento ("p", `Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();
