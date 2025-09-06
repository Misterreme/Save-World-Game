function iaMessage(): string {
    const options: string[] = ["Recuerda activar el velo si la distancia < 300 metros", "Cuida tus propulsores", "Escapar es la mejor opcion", ""];
    const index: number = Math.floor(Math.random() * options.length);

    const option: string = options[index] !== undefined ? options[index] : "Error";
    return option;
};

module.exports = {
    iaMessage
};