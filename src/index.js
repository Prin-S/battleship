import './styles.css';
import { ship } from './ship.js';
import { gameboard } from './gameboard.js';
import { player } from './player.js';

const comPlayer = player('com');
console.log(comPlayer.getGameboard());

const board1 = document.querySelector('#board1');

function createBoard(board, player) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');

            square.setAttribute('id', `square-${i}-${j}`);
            square.setAttribute('class', 'square');
            
            square.style['grid-column-start'] = j + 1;
            square.style['grid-column-end'] = j + 2;
            square.style['grid-row-start'] = i + 1;
            square.style['grid-row-end'] = i + 2;
            
            if (player.getGameboard()[i][j] == 1) {
                square.setAttribute('class', 'five-square-ship');
            } else if (player.getGameboard()[i][j] == 2) {
                square.setAttribute('class', 'four-square-ship');
            } else if (player.getGameboard()[i][j] == 3) {
                square.setAttribute('class', 'three-square-ship-1');
            } else if (player.getGameboard()[i][j] == 4) {
                square.setAttribute('class', 'three-square-ship-2');
            } else if (player.getGameboard()[i][j] == 5) {
                square.setAttribute('class', 'two-square-ship');
            }
            
            board.appendChild(square);
        }
    }
}

createBoard(board1, comPlayer);