const rl = require('readline-sync');
const cl = require('chalk');
const pls = require('play-sound')({ player: "C:\\ffmpeg\\bin\\ffplay.exe" });
const { godzillaScene } = require('./engine/scenes');
const { engines } = require('./logic/engines');
const { stopGame } = require('./engine/scenes');
const { calcularDistances } = require('./logic/distance');
const { generarCodigoSeguridad } = require('./logic/codigoIniciacion');

const menuOptions = ["Activar propulsores", "Calcular distancia con godzilla", "Escapar"];

async function game() {
    console.log(cl.blue(` ⢣  ⢣  ⢣  ⢣    ⢎⡑ ⣎⣱ ⡇⢸ ⣏⡉   ⡇⢸ ⡎⢱ ⣏⡱ ⡇  ⡏⢱   ⢣  ⢣  ⢣  ⢣ 
  ⠱  ⠱  ⠱  ⠱   ⠢⠜ ⠇⠸ ⠸⠃ ⠧⠤   ⠟⠻ ⠣⠜ ⠇⠱ ⠧⠤ ⠧⠜    ⠱  ⠱  ⠱  ⠱
  ---------------------------------------------------------
    `));

    await loadingGame(30, "Cargado correctamente");
    godzillaScene();
    menu();
};

function loadingGame(length: number, text: string): Promise<void> {
    return new Promise((resolve) => {
        let progress = 0;
        let interval = setInterval(() => {
            let progressPercentage = (progress / length) * 100;
            process.stdout.write(cl.green(`\r${" ".repeat(13)}[${"█".repeat(progress)}] ${progressPercentage.toFixed(0)}%`));
            progress++;
    
            if (progress > 30) {
                clearInterval(interval);
                showMessage(cl.green(`\n${" ".repeat(18)}${text}`));
                resolve();
            }
        }, 500);
    });
};

let runing: boolean = true;

let paso1Completado = false;
let paso2Completado = false;

async function menu() {
    // Opciones visibles según lo completado
    const opcionesDisponibles = menuOptions.map((opt, i) => {
        if (i === 1 && !paso1Completado) return opt + " (bloqueada)";
        if (i === 2 && !paso2Completado) return opt + " (bloqueada)";
        return opt;
    });

    const menuIndex: number = rl.keyInSelect(opcionesDisponibles);

    switch(menuIndex) {
        case 0:
            await engines();
            paso1Completado = true; // marcamos que se ejecutó
            break;
        case 1:
            if (!paso1Completado) {
                console.log(cl.red("Debes ejecutar primero la opción 1"));
            } else {
                await calcularDistances();
                paso2Completado = true; // marcamos que se ejecutó
            }
            break;
        case 2:
            if (!paso2Completado) {
                console.log(cl.red("Debes ejecutar primero la opción 2"));
            } else {
                generarCodigoSeguridad();
            }
            break;
        case -1:
            showMessage(cl.red("Cerrando..."));
            runing = false;
            break;
    }

    if (runing) {
        await menu();
    }
};


function showMessage(message: string) {
    const log = console.log;
    log(message);
};

game();

module.exports = {
    loadingGame,
};