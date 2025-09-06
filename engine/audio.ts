const pls = require('play-sound')({ player: "C:\\ffmpeg\\bin\\ffplay.exe" });

function playSound(sonido: string, path: string): void {
    switch (sonido) {
        case "godzilla":
            pls.play(`C:\\Users\\nunez\\OneDrive\\Escritorio\\game\\src\\sounds\\roar.mp3`, function(err: string) {
                if (err) throw err;
            });
            break;
        
        case "launch":
            pls.play(`C:\\Users\\nunez\\OneDrive\\Escritorio\\game\\src\\sounds\\launch.mp3`, function(err: string) {
                if (err) throw err;
            });
            break;

        case "game-over":
            pls.play(`C:\\Users\\nunez\\OneDrive\\Escritorio\\game\\src\\sounds\\game-over.mp3`, function(err: string) {
                if (err) throw err;
            });
            break;

        default:
            break;
    };
};

module.exports = {
    playSound,
};
