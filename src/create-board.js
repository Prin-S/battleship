import { humPlayer } from './human-player-init.js';
import { playerClickSquare } from './attack-actions.js';

function createBoard(board, type) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');

            square.setAttribute('id', `${type}-square-${j}-${i}`);
            square.setAttribute('class', 'square');
            
            square.style['grid-column-start'] = j + 1;
            square.style['grid-column-end'] = j + 2;
            square.style['grid-row-start'] = i + 1;
            square.style['grid-row-end'] = i + 2;
        
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

export { createBoard };