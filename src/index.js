import './styles.css';
import { getPlayerShipPositions } from './human-player-init.js';
import { createBoard } from './create-board.js';

const comBoard = document.querySelector('#computer-board');

getPlayerShipPositions()
createBoard(comBoard, 'com');