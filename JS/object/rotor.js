export class Rotor {

    constructor(datos) {
        this.rotor = datos;
    }

    getRotor() {
        return this.rotor;
    }

    setRotor(rotor) {
        this.rotor = rotor;
    }

    rotar(x) {
        this.getRotor().rotar(x)
    }

    rotar1() {
        let array = this.getRotor().getMix()

        array.push(array.shift())
        this.getRotor().setMix(array)
    }

    find(a) {
        const mix = this.getRotor().getMix()
        const pos = this.buscar(mix, a)

        const chars = this.getRotor().getCaracteres()
        return chars[pos];
    }

    dnif(a) {
        const chars = this.getRotor().getCaracteres()
        const pos = this.buscar(chars, a)
        
        const mix = this.getRotor().getMix()
        return mix[pos];
    }

    reflector(a) {
        const reflejo = [-12, 8, -2, 15, 3, -5, -17, 6, 18, -9, 10, -13, 2, -4, 7, -16, 1, -7, 12, 16, -18, 5, -6, 13, -3, -19 , 4, -15, 9, -10, 17, -8, 14, 11, -1, -14, -11, 19]
        const chars = this.getRotor().getCaracteres()

        var pos = this.buscar(chars, a)
        a = reflejo[pos] * -1
        pos = this.buscar(reflejo, a)

        return pos;
    }

    buscar(array, a) {
        let cont = 0;
        while (cont < array.length) {
            if (array[cont] == a) {
                return cont;
            }
            cont++;
        }   
    }
}