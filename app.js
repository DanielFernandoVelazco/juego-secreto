let intentos = 0,
    numeroSecreto = 0,
    listaNumeroSecreto = [],
    intentosMaximo = 10;

const asignarTextoElemento = (elemento, texto) => {
    const $elementoHtml = document.querySelector(elemento);
    $elementoHtml.innerHTML = texto;
    return;
};

const generarNumeroSecreto = () => {
    let numeroGenerado = Math.floor(Math.random() * intentosMaximo) + 1;

    if (listaNumeroSecreto.length === intentosMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los elementos posibles');
    } else {

        console.log(`Numero generado: ${numeroGenerado}`);
        console.log(`Lista de numero generados: ${[listaNumeroSecreto]}`);

        if (listaNumeroSecreto.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSecreto.push(numeroGenerado);
            return numeroGenerado;
        };
    };
};

const condicionesIniciales = () => {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Selecciona un numero entre 1 y ${intentosMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

condicionesIniciales();

const limpiarCaja = () => {
    document.querySelector('#valorUsuario').value = '';
};

const intentoDeUsuario = () => {
    const numeroDeUsuario = parseInt(document.querySelector('#valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
};

const reiniciarJuego = () => {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
};

reiniciarJuego();
