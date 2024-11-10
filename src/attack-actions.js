import { getRanInt, player } from './player.js';
import { humPlayer } from './human-player-init.js';

const comPlayer = player('com');

const topBox = document.querySelector('#box0-text1');

const box3Text1 = document.querySelector('#box3-text1');
const box3Text2 = document.querySelector('#box3-text2');

const box4Text1 = document.querySelector('#box4-text1');
const box4Text2 = document.querySelector('#box4-text2');

let currTurn = 'hum';
let won = false;

function playerClickSquare(x, y) {
    if (!won) {
        box4Text1.innerHTML = `(${y}, ${x}) selected.`; // Show the message under the computer player's board.
        box4Text2.innerHTML = comPlayer.checkHit(y, x);
        currTurn = 'com';

        modifySquareAndTexts(x, y, 'com');

        let comX, comY;

        [comX, comY, box3Text2.innerHTML] = computerClickSquare();
        box3Text1.innerHTML = `(${comY}, ${comX}) selected.`; // Show the message under the human player's board.
        currTurn = 'hum';

        modifySquareAndTexts(comX, comY, 'hum');
    }
}

function computerClickSquare() {
    let x = getRanInt(10);
    let y = getRanInt(10);
    let checkHitResult;
    let i = 0;

    while (i < 1) { // This is to prevent the computer player from selecting a square that has already been checked.
        checkHitResult = humPlayer.checkHit(y, x);

        if (checkHitResult == 'The square has already been selected - hit.' || checkHitResult == 'The square has already been selected - miss.') {
            x = getRanInt(10);
            y = getRanInt(10);
        } else { // Once the computer player selects an unchecked square,
            i++; // Exit the loop.
        }
    }

    return [x, y, checkHitResult];
}

function modifySquareAndTexts(x, y, type) {
    const currSquare = document.getElementById(`${type}-square-${y}-${x}`);

    let currBox;

    if (type == 'hum') { // Select the correct box the display the message.
        currBox = box3Text2;
    } else {
        currBox = box4Text2;
    }

    // Color currSquare appropriately.
    if (currBox.innerHTML == 'Miss!') {
        currSquare.setAttribute('class', 'square miss');
    } else if (currBox.innerHTML == 'Hit!' || currBox.innerHTML == 'Hit - ship sunk!' || currBox.innerHTML == 'Hit - all ships sunk!') {
        currSquare.setAttribute('class', 'square hit');
    }

    // Check whether the game has ended.
    if (currBox.innerHTML == 'Hit - all ships sunk!' && currTurn == 'com') {
        won = true;
        topBox.innerHTML = 'You won!';
    } else if (currBox.innerHTML == 'Hit - all ships sunk!' && currTurn == 'hum') {
        won = true;
        topBox.innerHTML = 'The computer won!';
    }
}

export { playerClickSquare };