const rl = require('readline-sync');
const cl = require('chalk');

function calcularDistances() {
    console.clear();
    console.log(cl.blue("\nIntroduce las coordenadas ([50-1000]). Todas deben ser diferentes."));

    let x1: number = Number(rl.question(cl.yellow("X1: ")));
    let x2: number = Number(rl.question(cl.yellow("X2: ")));
    let y1: number = Number(rl.question(cl.yellow("Y1: ")));
    let y2: number = Number(rl.question(cl.yellow("Y2: ")));

    const distances: number[] = [];
    distances.push(x1, x2, y1, y2);

    // Validaciones
    for (const dis of distances) {
        if (dis < 50 || dis > 1000) { 
            return console.log(cl.red("Las distancias deben estar entre 50 y 1000\n"));
        }
    }

    if (new Set(distances).size !== distances.length) {
        return console.error(cl.red("Todos los valores deben ser diferentes entre sí."));
    }

    // --- Cálculo de la distancia ---
    const escala = 100; // para convertir a "metros"
    const distanciaRequeridaMetros = 300;

    const dx = x2 - x1;
    const dy = y2 - y1;

    const distanciaSinEscala = Math.sqrt(dx ** 2 + dy ** 2);
    // const distanciaMetros = distanciaSinEscala * escala;

    console.log(cl.cyan("\nDistancia calculada:"), cl.green(`${Math.round(distanciaSinEscala)} metros`));
    console.log(cl.cyan("Distancia requerida para el velo:"), cl.yellow(`${distanciaRequeridaMetros} metros`));

    if (distanciaRequeridaMetros >= distanciaSinEscala) {
        console.log(cl.green("✅ Velo de invisibilidad activado"));
        console.log(cl.green("Godzilla no detectó la nave\n"));
    } else {
        console.log(cl.red("❌ Velo de invisibilidad no activado"));
    };
};


module.exports = {
    calcularDistances,
};