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
  console.log(cl.red(`   ____    _    __  __ _____    _____     _______ ____  
  / ___|  / \  |  \/  | ____|  / _ \ \   / / ____|  _ \ 
 | |  _  / _ \ | |\/| |  _|   | | | \ \ / /|  _| | |_) |
 | |_| |/ ___ \| |  | | |___  | |_| |\ V / | |___|  _ < 
  \____/_/   \_\_|  |_|_____|  \___/  \_/  |_____|_| \_\
                                                        `));
  playSound("game-over");
  await sleep(3000);
  process.exit(0);
};

function escapeScene() {
  console.clear();
  console.log(cl.green(`  _____ ____   ____    _    ____   _    ____ _____ _____ 
 | ____/ ___| / ___|  / \  |  _ \ / \  / ___|_   _| ____|
 |  _| \___ \| |     / _ \ | |_) / _ \ \___ \ | | |  _|  
 | |___ ___) | |___ / ___ \|  __/ ___ \ ___) || | | |___ 
 |_____|____/ \____/_/   \_\_| /_/   \_\____/ |_| |_____|
                                                         `));
  console.log(cl.green("Felicidades soldado, escapaste de godzilla\n"));
  process.exit(0);
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
