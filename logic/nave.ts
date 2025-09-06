class Nave {
    nombre: string;
    vida: number;
    escudo: boolean;

    constructor(nombre: string, vida: number) {
        this.nombre = nombre;
        this.vida = vida;
        this.escudo = false;
    };
};

const nave = new Nave("nave", 100);
module.exports = {
    nave,
};
