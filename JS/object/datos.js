export class Datos {
    
    constructor(mix) {
        this.caracteres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
        this.mix = mix;
    }

    getCaracteres() {
        return this.caracteres;
    }

    setCaracteres(caracteres) {
        this.caracteres = caracteres;
    }

    getMix() {
        return this.mix;
    }

    getMix(mix) {
        this.mix = mix;
    }
}