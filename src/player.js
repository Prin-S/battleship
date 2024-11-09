import { gameboard } from './gameboard.js';
//import promptSync from 'prompt-sync'; // This is so that we can use prompt() in node (for testing).

//const prompt = promptSync();

function getRanInt(num) { // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * num);
  }

function player(type) {
    const newGameboard = gameboard();

    const getGameboard = () => newGameboard.getBoard();

    let returnFromGameboard;
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

        if (type == 'hum') {
            console.log(`Ship ${i + 1} size: ${shipSize}`);
            let x = prompt('Choose the x coordinate of the ship (0-9).');
            let y = prompt('Choose the y coordinate of the ship (0-9).');
            let direction = prompt('Choose the direction of the ship - 0 for horizontal, 1 for vertical.');

            if (!x && !y && !direction) { // If nothing is entered, use the default values.
                if (i == 0) {
                    returnFromGameboard = newGameboard.placeShip(shipSize, 2, 3, 0); 
                } else if (i == 1) {
                    returnFromGameboard = newGameboard.placeShip(shipSize, 8, 1, 1);
                } else if (i == 2) {
                    returnFromGameboard = newGameboard.placeShip(shipSize, 0, 0, 0);
                } else if (i == 3) {
                    returnFromGameboard = newGameboard.placeShip(shipSize, 9, 7, 1);
                } else if (i == 4) {
                    returnFromGameboard = newGameboard.placeShip(shipSize, 4, 4, 0);
                }
            } else {
                returnFromGameboard = newGameboard.placeShip(shipSize, Number(x), Number(y), Number(direction)); // Place each ship based on the user's inputs until there are five ships.
            }
        } else if (type == 'com') {
            returnFromGameboard = newGameboard.placeShip(shipSize, getRanInt(10), getRanInt(10), getRanInt(2)); // Randomly place each ship until there are five ships.
        }

        if (typeof returnFromGameboard != 'string') {
            i++;
        }
    }

    return { getGameboard };
}

export { player };