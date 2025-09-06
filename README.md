# Save World Game (Consola, TypeScript/Node.js)

Juego de consola por terminal donde debes salvar al mundo del ataque de Godzilla (“The Killer”). El juego se desarrolla con escenas ASCII, audio y un menú interactivo con entradas por teclado.

## Características

- Escenas con arte ASCII: `godzillaScene()`, `launchScene()`, `destroydScene()`, `escapeScene()`.
- Audio in‑game mediante `play-sound` y `ffplay` (FFmpeg).
- Menú interactivo con `readline-sync`.
- Lógica de propulsores y despegue en `logic/engines.ts`.
- Cálculo de distancia y validación de entrada en `logic/distance.ts` (X1, Y1, X2, Y2 entre 50–1000, únicos).
- Minijuego de escape con código de iniciación en `logic/codigoIniciacion.ts`.

## Requisitos

- Node.js 18+ recomendado.
- FFmpeg instalado y accesible `ffplay` (en Windows, por defecto el proyecto espera `C:\\ffmpeg\\bin\\ffplay.exe`).

Dependencias clave (ver `package.json`):

- `readline-sync` para entrada por teclado.
- `chalk` para colores en consola.
- `play-sound` para reproducir audio a través de `ffplay`.
- `typescript`, `ts-node`, `nodemon` para desarrollo.

## Instalación

```bash
npm install
```

Si usas Windows y `ffplay` no está en `C:\\ffmpeg\\bin\\ffplay.exe`, edita el path del reproductor en:

- `src/game.ts`: `const pls = require('play-sound')({ player: "C:\\ffmpeg\\bin\\ffplay.exe" });`
- `src/engine/audio.ts`: `const pls = require('play-sound')({ player: "C:\\ffmpeg\\bin\\ffplay.exe" });`

Alternativa: agrega `ffplay` a tu PATH del sistema y elimina la opción `player` en las inicializaciones de `play-sound`.

## Ejecución

```bash
npm run dev
```

El punto de entrada es `src/index.ts`, que importa `src/game.ts` y arranca el juego.

## Flujo del juego

1) Introducción y escena de Godzilla (`engine/scenes.ts::godzillaScene`).

2) Menú principal (`src/game.ts`):

   - Activar propulsores: ejecuta `logic/engines.ts::engines()` y puede disparar `launchScene()` o `destroydScene()` según condiciones.
   - Calcular distancia con godzilla: ejecuta `logic/distance.ts::calcularDistances()` para pedir X1, Y1, X2, Y2; valida rango [50–1000] y unicidad; calcula distancia con Pitágoras (incluye interpretación de “metro a 100”). Informa si activa o no el “Velo de invisibilidad” (distancia requerida: 300 m).
   - Escapar: ejecuta `logic/codigoIniciacion.ts::generarCodigoSeguridad()` que genera un código, solicita confirmación y simula probabilidad de ataque; si escapas, muestra `escapeScene()`.

3) Audio: rugidos, despegue, y game over desde `src/sounds/`.

## Estructura del proyecto

```
src/
  index.ts                 # Entrada que carga game.ts
  game.ts                  # Menú principal, loading y orquestación
  engine/
    scenes.ts              # Escenas ASCII: godzillaScene, launchScene, destroydScene, escapeScene
    audio.ts               # Reproducción de sonidos mediante play-sound/ffplay
    aiHelper.ts            # Mensajes aleatorios de “IA”
  logic/
    engines.ts             # Lógica de propulsores y despegue
    distance.ts            # Cálculo/validación de distancias (X1, Y1, X2, Y2)
    codigoIniciacion.ts    # Minijuego de escape y probabilidad de ataque
    enemies.ts             # Clase Enemies y enemigo godzilla
    nave.ts                # Clase Nave (utilizable para futuras expansiones)
  sounds/
    roar.mp3, launch.mp3, game-over.mp3
```

## Lógica de distancias (resumen)

Archivo: `src/logic/distance.ts`.

- Pide X1, Y1, X2, Y2 por teclado, todos en [50–1000] y diferentes.
- Escalado/interpretación: se trabaja con factor 100 (coordenadas y/o distancia, según interpretación del requerimiento “multiplicar por el metro a 100”).
- Distancia: `sqrt((X2 - X1)^2 + (Y2 - Y1)^2)`.
- Regla de sigilo: si la distancia calculada es menor a 300 m, el “Velo de invisibilidad” se considera activo.

Nota: Si quieres una simulación paso a paso de acercamiento/alejamiento, puede integrarse un bucle de reposicionamiento (ver histórico en commits).

## Audio

Los sonidos se encuentran en `src/sounds/`. Para reproducirlos se usa `play-sound` con `ffplay`. Asegúrate de:

- Tener FFmpeg instalado.
- Que `ffplay` sea accesible en el path esperado. Por defecto se usa `C:\\ffmpeg\\bin\\ffplay.exe` en Windows.

Si ves errores como “Error: spawn C:\\ffmpeg\\bin\\ffplay.exe ENOENT”, instala FFmpeg o corrige la ruta en los archivos de audio mencionados arriba.

## Scripts disponibles

`package.json`:

- `npm run dev`: ejecuta el juego con nodemon (`src/index.ts`).

Sugerencias para agregar en el futuro:

- `npm run build`: compilar TypeScript a `dist/`.
- `npm start`: ejecutar `node dist/index.js`.

## Portabilidad y notas

- Las rutas de `ffplay` están fijadas para Windows. En otros sistemas, configura el path del player o añade `ffplay` al PATH.
- Este proyecto usa módulos CommonJS (`require/module.exports`) por compatibilidad con `ts-node` y `nodemon` tal como está configurado.
- Si deseas compilar a JavaScript, habilita en `tsconfig.json` las opciones `rootDir: "src"` y `outDir: "dist"`, y agrega scripts de build/start.

## Contribuciones

Issues y PRs bienvenidos. Asegúrate de seguir el estilo existente y probar las rutas de audio antes de abrir un PR.

## Licencia

Ver archivo `LICENSE` si se agrega; por defecto, ISC (según `package.json`).
