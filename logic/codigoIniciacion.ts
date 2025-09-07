const cl = require('chalk');
const rl = require('readline-sync');
const { destroydScene } = require('../engine/scenes');
const { escapeScene } = require('../engine/scenes');
const { playSound } = require('../engine/audio');

async function generarCodigoSeguridad() {
    const codigo: number[] = [];

    while (codigo.length < 10) {
        const n = Math.floor(Math.random() * 1000); // número aleatorio
        if (n % 50 === 1 && !codigo.includes(n)) {
            codigo.push(n);
        }
    }

    codigo.sort((a, b) => b - a); // orden descendente
    console.log(cl.green("Codigo de iniciacion generado:"));
    console.log(cl.yellow(codigo.join("\n")));

    const seguir = rl.question(cl.blue("\nEscribe 'si' para continuar: "));

    if (seguir.toLowerCase() === "si") {
        const probabilidadAtaque = 0.5;
    
        if (Math.random() < probabilidadAtaque) {
            console.log(cl.red("\n¡Godzilla te ha detectado y atacó! Has perdido la nave."));
            console.log(cl.red(`____    _    __  __ _____    _____     _______ ____  
  / ___|  / \  |  \/  | ____|  / _ \ \   / / ____|  _ \ 
 | |  _  / _ \ | |\/| |  _|   | | | \ \ / /|  _| | |_) |
 | |_| |/ ___ \| |  | | |___  | |_| |\ V / | |___|  _ < 
  \____/_/   \_\_|  |_|_____|  \___/  \_/  |_____|_| \_\
                                                        `));
            playSound("game-over");
            process.exit(0); 

        } else {
            console.clear();
            console.log(cl.green("\nEscapaste exitosamente. Continuando..."));
            escapeScene();
        }
    } else {
        console.log(cl.red("Opción inválida"));
    };
};

module.exports = {
    generarCodigoSeguridad
};
