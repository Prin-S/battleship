import './styles.css';
import { ship } from './ship.js';
import { gameboard } from './gameboard.js';
import { player } from './player.js';

const currTurn = document.querySelector('#turn-box');
let currTurnCode = 'hum';
let won = false;

const humPlayer = player('com');
const humBox = document.querySelector('#box1');
const humBoard = document.querySelector('#human-board');

const comPlayer = player('com');
const comBox = document.querySelector('#box2');
const comBoard = document.querySelector('#computer-board');

const box3Text1 = document.querySelector('#box3-text1');
const box3Text2 = document.querySelector('#box3-text2');
const box3Text3 = document.querySelector('#box3-text3');

function createBoard(board, type) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');

            square.setAttribute('id', `${type}-square-${i}-${j}`);
            square.setAttribute('class', 'square');
            
            square.style['grid-column-start'] = j + 1;
            square.style['grid-column-end'] = j + 2;
            square.style['grid-row-start'] = i + 1;
            square.style['grid-row-end'] = i + 2;

            square.addEventListener('click', clickSquare.bind(this, type, i, j));
            
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

            if (type == 'com') { // Only show the hover effect for the computer player's board.
                square.classList.add('hoverable');
            }
            
            board.appendChild(square);
        }
    }
}

function clickSquare(type, x, y) {
    if (currTurnCode != type && !won) {
        const currSquare = document.getElementById(`${type}-square-${x}-${y}`);

        let currPlayer;

        if (currTurn.innerHTML == 'Your turn') {
            currTurn.innerHTML = `Computer's turn`;
            currTurnCode = 'com';
            humBox.classList.add('current-turn-box');
            comBox.classList.remove('current-turn-box');
            currPlayer = comPlayer;
        } else {
            currTurn.innerHTML = 'Your turn';
            currTurnCode = 'hum';
            humBox.classList.remove('current-turn-box');
            comBox.classList.add('current-turn-box');
            currPlayer = humPlayer;
        }

        box3Text1.innerHTML = `(${x}, ${y}) selected.`;
        box3Text2.innerHTML = `${currPlayer.checkHit(y, x)}`;

        if (box3Text2.innerHTML == 'Miss!') {
            currSquare.setAttribute('class', 'square miss');
        } else if (box3Text2.innerHTML == 'Hit!' || box3Text2.innerHTML == 'Hit - ship sunk!' || box3Text2.innerHTML == 'Hit - all ships sunk!') {
            currSquare.setAttribute('class', 'square hit');
        }

        if (box3Text2.innerHTML == 'Hit - all ships sunk!' && currTurnCode == 'com') {
            won = true;
            box3Text3.innerHTML = 'You won!';
        } else if (box3Text2.innerHTML == 'Hit - all ships sunk!' && currTurnCode == 'hum') {
            won = true;
            box3Text3.innerHTML = 'The computer won!';
        }
    }
}

createBoard(humBoard, 'hum');
createBoard(comBoard, 'com');