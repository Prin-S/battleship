import './styles.css';
import { getPlayerShipPositions, humBoard, comBoard } from './human-player-init.js';
import { createBoard } from './create-board.js';

const topBox = document.querySelector('#box0-text1');

const placeShips = document.querySelector('#place-ships');
placeShips.addEventListener('click', getPlayerShipPositions);

const randomize = document.querySelector('#randomize');
randomize.addEventListener('click', randomizeBothBoards);

function randomizeBothBoards() {
    topBox.innerHTML = `Click on a square on the computer's board to attack.`; // Remove the two buttons and change the text at the top of the page.
    createBoard(humBoard, 'hum');
    createBoard(comBoard, 'com');
}