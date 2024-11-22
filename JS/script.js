import {R1, R2, R3} from './config.js';

const enviar = document.getElementById('enviar');

var ar = ["F", "V", "O", "8", "3", "S", "0", "K", "H", "2", "Q", "E", "L", "5", "M", "G", "1", "A", "D", "7", "J", "X", "Y", "C", "R", "9", " ", "P", "W", "Z", "T", "B", "6", "I", "N", "4", "Ñ", "U"]


enviar.addEventListener('click', iniciar);

function iniciar (){

    var rPos1 = document.getElementById('rPos1').value
    var rPos2 = document.getElementById('rPos2').value
    var rPos3 = document.getElementById('rPos3').value

    let emisor = document.getElementById('emisor').value
    emisor = emisor.toUpperCase();
    let receptor = document.getElementById('receptor');

    R1.rotar(rPos1);
    R2.rotar(rPos2);
    R3.rotar(rPos3);

    var mensaje = cifrar(emisor);
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