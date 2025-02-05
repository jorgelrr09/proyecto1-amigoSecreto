// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresSorteados = [];
let nombreNumero = 0;

alert('Bienvenido al juego, ¿Estás listo?');

function agregarAmigo(){
    let nombreSorteo = document.getElementById('amigo').value;
    if(listaNombresSorteados.includes(nombreSorteo)){
        alert('El nombre ya fue ingresado');
    }else if(nombreSorteo == ''){
        alert('No puedes ingresar valores vacíos');
    }
    else{
        listaNombresSorteados.push(nombreSorteo);
        nombreSorteo = '';
    }
    limpiarCaja();
    console.log(listaNombresSorteados);
    return;
}

function sortearAmigo(){
    if(listaNombresSorteados.length == 0){
        alert('No ha ingresado ningún nombre');
    }else{
        asignarTextoElemento('p',`El nombre sorteado es: ${listaNombresSorteados[generarNumeroSorteado()]}`);
    }
    return;
}

function limpiarCaja(){
    let amigo = document.querySelector('#amigo');
    amigo.value = '';
}

function generarNumeroSorteado(){
    let numeroGenerado = Math.floor(Math.random()*listaNombresSorteados.length);
    console.log(numeroGenerado);
    return numeroGenerado;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}