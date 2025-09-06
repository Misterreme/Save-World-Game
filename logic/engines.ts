const cl = require('chalk');
const rl = require('readline-sync');
const { loadingGame } = require('../game');
const { launchScene } = require('../engine/scenes');
const { destroydScene } = require('../engine/scenes');

async function engines() {
    console.clear();
    console.log(cl.green("\nNecesitamos saber la condicion de los propulsores (responde con true o false)."));
    const propulsores = rl.question(cl.red("Funcionan ambos propulsores?\n"));

    const hidroPsopulsor = 5000;
    const potencia = 10000;
    const poderBase = hidroPsopulsor + potencia;

    if (propulsores === "true") {
        const umbral = 0.75 * poderBase;
        
        console.clear();
        await launchScene();
        return;

    } else if (propulsores === "false") {
        const propulsorIzq = rl.question(cl.blue("Funciona el propulsor izquierdo?\n"));
        const propulsorDer = rl.question(cl.blue("Funciona el propulsor derecho?\n"));

        const propulsorIzquierdo = propulsorIzq === "true";
        const propulsorDerecho = propulsorDer === "true";
        
        let umbral = 0.90 * poderBase;

        if (propulsorIzq !== "true" && propulsorIzq !== "false") {
            console.log(cl.red("Opcion invalida"));
            return;
        };

        if (propulsorDer !== "true" && propulsorDer !== "false") {
            console.log(cl.red("Opcion invalida"));
            return;
        };
        
        if (propulsorIzq === "true" && propulsorDer === "false") {
            const requeridoIzq = (Math.pow(0.90, 2) / 3) * hidroPsopulsor;
            umbral = umbral + requeridoIzq;
        };

        if (propulsorIzq === "false" && propulsorDer === "true") {
            const requeridoDer = (Math.pow(0.90, 2) / 3) * potencia;
            umbral = umbral + requeridoDer;
        };

        if (poderBase >= umbral) {
            console.log(cl.green("¡Despegue exitoso!"));
            await launchScene();

        } else {
            console.clear();
            console.log(cl.yellow(`Umbral de despegue: ${umbral}`));
            console.log(cl.red("No hay suficiente potencia para despegar..."));
            await destroydScene();
        };

    } else {
        console.log(cl.red("Opcion invalida..."));
    };
};

module.exports = {
    engines,
};