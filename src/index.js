import './styles.css';
import { ship } from './ship.js';
import { gameboard } from './gameboard.js';
import { player } from './player.js';

const humPlayer = player('com');
const humBoard = document.querySelector('#human-board');
const box2Text1 = document.querySelector('#box2-text1');
const box2Text2 = document.querySelector('#box2-text2');

const comPlayer = player('com');
const comBoard = document.querySelector('#computer-board');
const box4Text1 = document.querySelector('#box4-text1');
const box4Text2 = document.querySelector('#box4-text2');

function createBoard(player, board, type, boxText1, boxText2) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');

            square.setAttribute('id', `${type}-square-${i}-${j}`);
            square.setAttribute('class', 'square');
            
            square.style['grid-column-start'] = j + 1;
            square.style['grid-column-end'] = j + 2;
            square.style['grid-row-start'] = i + 1;
            square.style['grid-row-end'] = i + 2;

            square.addEventListener('click', clickSquare.bind(this, player, type, boxText1, boxText2, i, j));
            
            if (type == 'hum') { // Only reveal the ship positions for the human player's board.
                if (humPlayer.getGameboard()[i][j] == 1) {
                    square.setAttribute('class', 'square five-square-ship');
                } else if (humPlayer.getGameboard()[i][j] == 2) {
                    square.setAttribute('class', 'square four-square-ship');
                } else if (humPlayer.getGameboard()[i][j] == 3) {
                    square.setAttribute('class', 'square three-square-ship-1');
                } else if (humPlayer.getGameboard()[i][j] == 4) {
                    square.setAttribute('class', 'square three-square-ship-2');
                } else if (humPlayer.getGameboard()[i][j] == 5) {
                    square.setAttribute('class', 'square two-square-ship');
                }
            }
            
            board.appendChild(square);
        }
    }
}

function clickSquare(player, type, boxText1, boxText2, x, y) {
    const currSquare = document.getElementById(`${type}-square-${x}-${y}`);

    boxText1.innerHTML = `(${x}, ${y}) selected.`;
    boxText2.innerHTML = `${player.checkHit(y, x)}`;

    if (boxText2.innerHTML == 'Miss!') {
        currSquare.setAttribute('class', 'square miss');
    } else if (boxText2.innerHTML == 'Hit!' || boxText2.innerHTML == 'Hit - ship sunk!' || boxText2.innerHTML == 'Hit - all ships sunk!') {
        currSquare.setAttribute('class', 'square hit');
    }
}

createBoard(humPlayer, humBoard, 'hum', box2Text1, box2Text2);
createBoard(comPlayer, comBoard, 'com', box4Text1, box4Text2);