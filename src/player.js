import { gameboard } from './gameboard.js';

function getRanInt(num) { // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * num);
  }

function player(type) {
    const newGameboard = gameboard();

    const getGameboard = () => newGameboard.getBoard();

    if (type == 'hum') {
        for (let i = 0; i < 5; i++) {
            // let choice = prompt(``);
            // newGameboard.placeShip()
        }
    } else if (type == 'com') {
        let i = 0;
        let shipSize = 0;

        while (i < 5) {
            if (i == 0) {
                shipSize = 5;
            } else if (i == 1) {
                shipSize = 4;
            } else if (i == 2 || i == 3) {
                shipSize = 3;
            } else if (i == 4) {
                shipSize = 2;
            }

            const returnFromGameboard = newGameboard.placeShip(shipSize, getRanInt(10), getRanInt(10), getRanInt(2)); // Randomly place each ship until there are five ships.

            if (typeof returnFromGameboard != 'string') {
                i++;
            }
        }
    }

    return { getGameboard };
}

export { player };