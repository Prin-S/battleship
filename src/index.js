import './styles.css';
import { ship } from './ship.js';
import { gameboard } from './gameboard.js';
import { getRanInt, player } from './player.js';

const topBox = document.querySelector('#box0-text1');

const humPlayer = player('com');
const humBoard = document.querySelector('#human-board');

const comPlayer = player('com');
const comBoard = document.querySelector('#computer-board');

const box3Text1 = document.querySelector('#box3-text1');
const box3Text2 = document.querySelector('#box3-text2');

const box4Text1 = document.querySelector('#box4-text1');
const box4Text2 = document.querySelector('#box4-text2');

let currTurn = 'hum';
let won = false;

function createBoard(board, type) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');

            square.setAttribute('id', `${type}-square-${i}-${j}`);
            square.setAttribute('class', 'square');
            
            square.style['grid-column-start'] = i + 1;
            square.style['grid-column-end'] = i + 2;
            square.style['grid-row-start'] = j + 1;
            square.style['grid-row-end'] = j + 2;
        
            if (type == 'hum') { // Only reveal ship positions for the human player's board.
                if (humPlayer.getGameboard()[i][j] == 1) {
                    square.classList.add('five-square-ship');
                } else if (humPlayer.getGameboard()[i][j] == 2) {
                    square.classList.add('four-square-ship');
                } else if (humPlayer.getGameboard()[i][j] == 3) {
                    square.classList.add('three-square-ship-1');
                } else if (humPlayer.getGameboard()[i][j] == 4) {
                    square.classList.add('three-square-ship-2');
                } else if (humPlayer.getGameboard()[i][j] == 5) {
                    square.classList.add('two-square-ship');
                }
            }

            // The human player will be interacting on the computer player's board.
            if (type == 'com') { // For each square on the computer player's board,
                square.addEventListener('click', playerClickSquare.bind(this, i, j)); // Add an event listener.
                square.classList.add('hoverable'); // Add the hover effect.
            }
            
            board.appendChild(square);
        }
    }
}

function playerClickSquare(x, y) {
    if (!won) {
        box4Text1.innerHTML = `(${x}, ${y}) selected.`; // Show the message under the computer player's board.
        box4Text2.innerHTML = comPlayer.checkHit(y, x);
        currTurn = 'com';

        modifySquareAndTexts(x, y, 'com');

        let comX, comY;

        [comX, comY, box3Text2.innerHTML] = computerClickSquare();
        box3Text1.innerHTML = `(${comX}, ${comY}) selected.`; // Show the message under the human player's board.
        currTurn = 'hum';

        modifySquareAndTexts(comX, comY, 'hum');
    }
}

function modifySquareAndTexts(x, y, type) {
    const currSquare = document.getElementById(`${type}-square-${x}-${y}`);

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

createBoard(humBoard, 'hum');
createBoard(comBoard, 'com');