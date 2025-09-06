const cl = require('chalk');
const rl = require('readline-sync');
const { destroydScene } = require('../engine/scenes');
const { escapeScene } = require('../engine/scenes');
const { playSound } = require('../engine/audio');

function generarCodigoSeguridad() {
    const codigo: number[] = [];

    while (codigo.length < 10) {
        const n = Math.floor(Math.random() * 1000); // número aleatorio
        if (n % 50 === 1 && !codigo.includes(n)) {
            codigo.push(n);
        }
    }

    codigo.sort((a, b) => b - a); // orden descendente
    console.log(cl.green("🔢 Código de iniciación generado:"));
    console.log(cl.yellow(codigo.join("\n")));

    const seguir = rl.question(cl.blue("\nEscribe 'si' para continuar: "));

    if (seguir.toLowerCase() === "si") {
        const probabilidadAtaque = 0.5;
    
        if (Math.random() < probabilidadAtaque) {
            console.log(cl.red("\n¡Godzilla te ha detectado y atacó! Has perdido la nave."));
            console.log(cl.red(`>===>          >>       >=>       >=> >=======>           >===>      >=>         >=> >=======> >======>     
                >>    >=>       >>=>      >> >=>   >>=> >=>               >=>    >=>    >=>       >=>  >=>       >=>    >=>   
               >=>             >> >=>     >=> >=> > >=> >=>             >=>        >=>   >=>     >=>   >=>       >=>    >=>   
               >=>            >=>  >=>    >=>  >=>  >=> >=====>         >=>        >=>    >=>   >=>    >=====>   >> >==>      
               >=>   >===>   >=====>>=>   >=>   >>  >=> >=>             >=>        >=>     >=> >=>     >=>       >=>  >=>     
                >=>    >>   >=>      >=>  >=>       >=> >=>               >=>     >=>       >===>      >=>       >=>    >=>   
                 >====>    >=>        >=> >=>       >=> >=======>           >===>            >=>       >=======> >=>      >=> 
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
