class Enemies {

    name: string;
    health: number;


    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    };

    atacar(ataque: string) {
        console.log(`¡${this.name} ha atacado con su ${ataque}!`);
    };
};

const godzilla = new Enemies("Godzilla", 100);

module.exports = {
    Enemies,
    godzilla
};