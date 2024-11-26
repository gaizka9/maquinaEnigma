import {R1, R2, R3} from './config.js';

const enviar = document.getElementById('enviar');

enviar.addEventListener('click', iniciar);

function iniciar (){

    var rPos1 = document.getElementById('rPos1').value
    var rPos2 = document.getElementById('rPos2').value
    var rPos3 = document.getElementById('rPos3').value

    let emisor = document.getElementById('emisor').value
    emisor = emisor.toUpperCase();
    emisor = sustituir(emisor)
    console.log(emisor)
    let receptor = document.getElementById('receptor');

    R1.rotar(rPos1);
    R2.rotar(rPos2);
    R3.rotar(rPos3);

    var mensaje = cifrar(emisor);
    mensaje = sustituir(mensaje)
    receptor.innerText = mensaje;
}

function cifrar (mensaje) {
    const longitud = R1.getRotor().getCaracteres().length
    let ciclo1 = 0, ciclo2 = 0
    var salida = ''
    var cambio
    for (let i = 0; i < mensaje.length; i++) {

        cambio = R1.find(mensaje[i])
        cambio = R2.find(cambio)
        cambio = R3.find(cambio)

        var pos = R1.reflector(cambio)

        var char = R3.getRotor().getCaracteres()[pos]
        cambio = R3.dnif(char)
        cambio = R2.dnif(cambio)
        cambio = R1.dnif(cambio)

        salida += cambio

        R1.rotar1()
        ciclo1++;

        if (ciclo1 == longitud) {
            R2.rotar1();
				ciclo1 = 0;
				ciclo2++;
        }

        if (ciclo2 == longitud) {
            R3.rotar1();
            ciclo2 = 0;
        }
    }

    return salida
}

function sustituir(emisor) {
    const resultado = new Array(20).fill(null);
    const elementos = document.querySelectorAll('.tecla');

    elementos.forEach(elemento => {
        const dataColor = elemento.getAttribute('data-color');
        const dataKey = elemento.getAttribute('data-key');

        if (dataColor) {
            const numero = Number(dataColor);
                
            if (resultado[numero - 1] === null) {
                resultado[numero - 1] = dataKey;
            } else {
                resultado[(numero - 1) + 10] = dataKey;
            }
        }
    });

    var mensaje = ''
    for (let i = 0; i < emisor.length; i++) {
        mensaje += sustit(resultado, emisor[i], 0);
    }

    return mensaje;
}

function sustit(array, a, x){

    if (x == 20) {
        return a
    } else if (a == array[x]){
        if (x < 10) {
            return array[x + 10]
        }else {
            return array[x - 10]
        }
    }else {
        return sustit(array, a, x+1)
    }
}