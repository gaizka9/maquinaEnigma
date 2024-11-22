import { Datos } from './object/datos.js';
import { Rotor } from './object/rotor.js';

const mix0 = ["F", "V", "O", "8", "3", "S", "0", "K", "H", "2", "Q", "E", "L", "5", "M", "G", "1", "A", "D", "7", "J", "X", "Y", "C", "R", "9", " ", "P", "W", "Z", "T", "B", "6", "I", "N", "4", "Ñ", "U"];
const mix1 = ["G", "2", "K", "P", "Ñ", "M", " ", "7", "E", "A", "X", "Y", "H", "W", "Q", "R", "5", "O", "V", "S", "9", "4", "I", "1", "U", "N", "0", "D", "3", "C", "F", "6", "8", "Z", "J", "L", "B", "T"]; 
const mix2 = ["X", "5", "P", "C", "1", "Y", "G", "U", "V", "N", "Ñ", "R", "9", "T", "H", "3", "K", "O", "7", "S", "B", "0", "J", "E", "M", "6", "A", "L", "W", "4", "D", "Q", "Z", " ", "8", "F", "I", "2"];
const mix3 = ["B", "K", "T", "5", "W", "Z", "H", "9", "U", "F", "0", "S", "2", "L", "V", "X", "G", "O", "3", "N", "Y", "6", "D", "Ñ", "Q", " ", "7", "M", "J", "1", "A", "R", "4", "E", "P", "C", "I", "8"];
const mix4 = ["J", "4", "M", "I", "0", "Q", "X", "V", "7", "T", "5", "R", "K", " ", "G", "L", "9", "W", "Ñ", "1", "C", "O", "U", "S", "F", "H", "Y", "E", "B", "3", "P", "A", "N", "D", "Z", "2", "6", "8"];
const mix = [mix0, mix1, mix2, mix3, mix4];

const maquina = document.getElementById('maquina');

function seleccionRotor(x) {

    const select = document.createElement("select");
    select.setAttribute('id', 'rotor' + x)

    for (let i = 0; i < 5; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i + 1; 
        select.appendChild(option);
    }

    return select
}

function inicioRotor(x) {

    const caracteres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
    const select = document.createElement("select");
    select.setAttribute('id', 'rPos' + x)

    for (let i = 0; i < caracteres.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = caracteres[i]; 
        select.appendChild(option);
    }

    return select;
}

const selectr1 = seleccionRotor(1)
const selectr2 = seleccionRotor(2)
const selectr3 = seleccionRotor(3)

const select1 = inicioRotor(1)
const select2 = inicioRotor(2)
const select3 = inicioRotor(3)

document.getElementById('R1').appendChild(selectr1);
document.getElementById('R2').appendChild(selectr2);
document.getElementById('R3').appendChild(selectr3);

document.getElementById('R1').appendChild(select1);
document.getElementById('R2').appendChild(select2);
document.getElementById('R3').appendChild(select3);



const r1 = document.getElementById('rotor1').value;
const r2 = document.getElementById('rotor2').value;
const r3 = document.getElementById('rotor3').value;

const d1 = new Datos(mix[r1]);
const d2 = new Datos(mix[r2]);
const d3 = new Datos(mix[r3]);

export let R1 = new Rotor(d1);
export let R2 = new Rotor(d2);
export let R3 = new Rotor(d3);