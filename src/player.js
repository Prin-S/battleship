import { gameboard } from './gameboard.js';
//import promptSync from 'prompt-sync'; // This is so that we can use prompt() in node (for testing).

//const prompt = promptSync();

function getRanInt(num) { // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * num);
}

function player(type, arr = []) { // arr is only entered when type = 'hum'.
    const newGameboard = gameboard();

    const getGameboard = () => newGameboard.getBoard();
    const checkHit = (x, y) => newGameboard.receiveAttack(x, y);

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
            returnFromGameboard = newGameboard.placeShip(shipSize, Number(arr[i][0]), Number(arr[i][1]), Number(arr[i][2])); // Place each ship based on the user's inputs until there are five ships.
        } else if (type == 'com') {
            returnFromGameboard = newGameboard.placeShip(shipSize, getRanInt(10), getRanInt(10), getRanInt(2)); // Randomly place each ship until there are five ships.
        }

        if (typeof returnFromGameboard != 'string') {
            i++;
        }
    }

    return { getGameboard, checkHit };
}

export { getRanInt, player };