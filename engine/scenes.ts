const cl = require('chalk');
const { playSound } = require('./audio');
const { godzilla } = require('../logic/enemies');

function godzillaScene() {
    console.clear();
    console.log(cl.blue(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░   ░░ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░   ░       ░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▒░░░░░░░░░░          ░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░
▒▒▒▒▒▒▒▒▒▒░░           ░░▒░░░░░▒▒▒▒▒▒▒▒▒░░░░░░░░░░
▒▒▒▒▒▒▒▒▒▒▒░            ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒░  ░░          ░░▒▓▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒   ░░░░      ░░ ░ ░░░ ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒░  ░░░░░░░        ░▒░▒░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒
▓▓▒▒▒▒▒▒▒▒░▒▒▒▒░░░░░░░        ░   ░░░▒▒▓▓▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▓▓▓▒░░░░░▒░    ░░░░░░       ░░ ░▒▒▒▒▒▒▒▒▒▒▒▒▒
▓▓▓▒▒▓▓▒▒░░░░░         ░░░░░    ░░   ▒▒▓▓▓▓▓▓▒▒▒▒▒
▓▓▒▒▒▒▒▒▒░░░░           ░░░  ░   ░ ░▒▒▒▒▒░░░▒▒▒▒▒▒
▒▓▓▓▒▒▒▒▓░  ░            ▒░░     ░  ░▒▒░░░░▒▒▒▒▒▒▒
▓▓▓▒▒▒▒▒▒░               ▒░░        ░ ░░░░░░▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒░░░  ░▒        ░░ ░     ░        ░▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒░    ░▒▒▒░░     ░  ░              ▒▒░░░▒▒▒
▒▒▒▒▒▒▒░   ░▒▒▒▒▒░░░                     ░ ░░░░░░░
▒▒▒░░░  ▒▒▒▒░▒▒░░░                           ░░░░░
▒░  ░░▒▒▒░░▒░░░░░░                         ░░░░░░▒
▒▒░░░░▒▒▒░▒▒▒▒░░             ░░      ░ ░   ░░░░░░░
░░░░░▒▒▒▒░░▒░░    ░░         ░░              ░░░░░
░░░░░░░░░░░░░                 ░░░            ░░░░░
`));
  playSound("godzilla");
  console.log(cl.red("¡Oh no! Godzilla ha aparecido y quiere destruir todo."));
  console.log(cl.red("¡Necesitamos que nos salves! Te preparamos una nave para que completes esta mision. Adelante soldado."));
};

async function launchScene() {
    console.clear();
    console.log("\n");
    console.log("\n");
    await sleep(1000);
    console.log(cl.green("Propulsores activos y en buen estado."));
    await sleep(1000);
    console.log(cl.green("Realizando secuencia de despegue..."));
    await sleep(1000);
    console.log(cl.red("[3]"));
    await sleep(1000);
    console.log(cl.red("[2]"));
    await sleep(1000);
    console.log(cl.red("[1]"));
    await sleep(1000);
    console.log(cl.red("[0]"));
    await sleep(1000);
    console.clear();
    console.log(cl.green("Preparando despegue..."))
    console.log("\n");
    console.log(cl.red(`                                ░░      
                            ░░▒▓▓▓▓▓░   
                         ░▒▓▓▓▓▓▓▓▓▓░   
                      ░▒▓▓▓▓▓▓▓▓▓▓▓░░   
                    ░▒▓▓▒▒▒▒▒▓▓▓▓▓▒░    
                 ░░▓▓▓▓▒░░░░░░▒▓▓▓░     
            ░▒▒▒▒▒▓▓▓▓▒░░░░░░░░▒▓░      
        ░░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░▒▓░░      
      ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓░        
     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░         
    ░▓▓▒░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░          
     ░░░░▒▒░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓░           
     ░░░░▒▒░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▒           
     ░░░▒▒░░░░░░░░░▓▓▓▓▓▓▓▓▓░           
    ░░░▒▒▒▒░░░░▒░▒▒▒░ ░▓▓▓▓░░           
    ░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░▓▓▓▒░             
    ░░░▒▒▒▒░░░░░░░░░░▓▓▒░░              
     ░░░░░░░░░░░    ░░░                 
     ░░░░                               
       ░                                
`));
    playSound("launch");
    console.log(cl.green("¡Hemos despegado!"));
};

async function destroydScene() {
  console.log("\n");
  console.log("\n");
  console.log("\n");
  await sleep(1000);
  console.log(cl.red("Ya no hay vuelta a atras..."));
  await sleep(1000);
  godzilla.atacar(cl.red("Razo atomico"));
  console.log(`                                                                      
                                                                      
                               ░▒▒░                                   
                   ░▒▒▓█▓▒░░▓░▒██▒░ ░ ░▒     ░▒▒                      
               ░░░░░░░░▓████▓▓███░ ▓▓▒██▒ ░▒░▒░                       
         ░░░░░░░░░░   ░░█████████░▓████▓░░▓▒█▓░                       
    ░░░░░░░░░    ░░░░░▓▓░▓██████████▓██▓▒████▒░                       
░░░░░░░░░     ░░░░░░░░░   ░▓████████████▓███▓░                        
░░░░    ░░░░░░░░░░         ▓████████████▓██▓▒▒░▓▓░░                   
  ░░░░░░░░░░░        ▒█████████████████████▓▒███▓▓░                   
░░░░░                ░░░████████████████████▓██▓▒░                    
░                       ▒░    ░██████████████▓▓▒░ ░                   
                              ░██████████████▒▓░▓▒▒▓░                 
                              █████████████████████▓░                 
                             ▓███████████████████▓▓▓▓░                
                            ░▓██████████████████████▓█▒▒░             
                             ░▓█████████████████████████▒▒░░          
                              ░█████▓██████▓▓▓███████████▓█▓█░▒▒▒    ░
                              ░▒████▒░▓▓████▓  ░▓▓█████████████████░▓▓
                          ░▒███████▒▓▓▓▓▓███░        ░▓▓▓█████████████
`);
  await playSound("godzilla");
  await sleep(5000);
  console.clear();
  console.log("\n");
  console.log("\n");
  console.log("\n");
  console.log(cl.red(`   >===>          >>       >=>       >=> >=======>           >===>      >=>         >=> >=======> >======>     
 >>    >=>       >>=>      >> >=>   >>=> >=>               >=>    >=>    >=>       >=>  >=>       >=>    >=>   
>=>             >> >=>     >=> >=> > >=> >=>             >=>        >=>   >=>     >=>   >=>       >=>    >=>   
>=>            >=>  >=>    >=>  >=>  >=> >=====>         >=>        >=>    >=>   >=>    >=====>   >> >==>      
>=>   >===>   >=====>>=>   >=>   >>  >=> >=>             >=>        >=>     >=> >=>     >=>       >=>  >=>     
 >=>    >>   >=>      >=>  >=>       >=> >=>               >=>     >=>       >===>      >=>       >=>    >=>   
  >====>    >=>        >=> >=>       >=> >=======>           >===>            >=>       >=======> >=>      >=> 
                                                                                                               `));
  playSound("game-over");
};

function escapeScene() {
  console.clear();
  console.log(cl.green(`8888888888 .d8888b.   .d8888b.        d8888 8888888b.     d8888  .d8888b. 88888888888 8888888888 
888       d88P  Y88b d88P  Y88b      d88888 888   Y88b   d88888 d88P  Y88b    888     888        
888       Y88b.      888    888     d88P888 888    888  d88P888 Y88b.         888     888        
8888888    "Y888b.   888           d88P 888 888   d88P d88P 888  "Y888b.      888     8888888    
888           "Y88b. 888          d88P  888 8888888P" d88P  888     "Y88b.    888     888        
888             "888 888    888  d88P   888 888      d88P   888       "888    888     888        
888       Y88b  d88P Y88b  d88P d8888888888 888     d8888888888 Y88b  d88P    888     888        
8888888888 "Y8888P"   "Y8888P" d88P     888 888    d88P     888  "Y8888P"     888     8888888888 
                                                                                                 
                                                                                                 
                                                                                                 `));
  console.log(cl.green("Felicidades soldado, escapaste de godzilla\n"));
  process.exit(0)
};

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function stopGame(variable: boolean) {
  variable = false;
  console.log(variable);
};

module.exports = {
    godzillaScene,
    launchScene,
    destroydScene,
    escapeScene,
    stopGame,
};
