import { ship } from './ship.js';

function gameboard() {
    const board = new Array(10).fill(0).map(() => new Array(10).fill(0)); // Create a 10 x 10 array for the gameboard.
    // First, create an array with 10 elements and fill each element with 0.
    // Second, map each element with a new array filled with 0s.
    // If new Array(10).fill(new Array(10).fill(0)); is used, each element will have the same array,
    // so when something is changed in one, it will affect all elements.
    
    const ships = [];
    let hitCount = 0;
    let missedCount = 0;
    let allSunk = false;

    const getBoard = () => board;
    const getShips = () => ships;
    const getHitCount = () => hitCount;
    const getMissedCount = () => missedCount;
    const checkAllSunk = () => {
        if (ships.every(ship => ship.isSunk())) {
            return allSunk = true;
        } else {
            return allSunk = false;
        }
    };

    const placeShip = (shipLength, startingX, startingY, direction) => {
        if (ships.length >= 5) {
            return 'The maximum number of ships (5) has been reached.';
        }

        if (shipLength < 1 || shipLength > 5) {
            return 'The ship length must be from 0 to 5.';
        }
        
        if (startingX < 0 || startingX > 9 || startingY < 0 || startingY > 9) {
            return 'The grid position must be from 0 to 9.';
        }

        const shipNumber = ships.length + 1; // An empty square is 0, so + 1 so that shipNumber starts at 1.

        if (direction == 0) { // 0 means horizontal.
            if (startingX + shipLength > 10) {
                return 'Invalid position - the ship will fall outside the gameboard.';
            }

            for (let i = 0; i < shipLength; i++) { // The first loop checks if there is any invalid square.
                if (board[startingY][startingX + i] > 0) { // Number more than 0 means there is a ship in the square.
                    return 'Invalid position - at least one square is occupied.'; // return to prevent the second loop from running.
                }
            }

            for (let i = 0; i < shipLength; i++) { // The second loop places the ship.
                board[startingY][startingX + i] = shipNumber; // Mark the square with shipNumber.
            }
        } else if (direction == 1) { // 1 means vertical.
            if (startingY + shipLength > 10) {
                return 'Invalid position - the ship will fall outside the gameboard.';
            }

            for (let i = 0; i < shipLength; i++) { // The first loop checks if there is any invalid square.
                if (board[startingY + i][startingX] > 0) { // Number more than 0 means there is a ship in the square.
                    return 'Invalid position - at least one square is occupied.'; // return to prevent the second loop from running.
                }
            }

            for (let i = 0; i < shipLength; i++) { // The second loop places the ship.
                board[startingY + i][startingX] = shipNumber; // Mark the square with shipNumber.
            }
        }

        ships.push(ship(shipLength));

        return board;
    }

    const receiveAttack = (x, y) => {
        if (board[y][x] == 'X') {
            return 'The square has already been selected - hit.';
        }

        if (board[y][x] == '-') {
            return 'The square has already been selected - miss.';
        }

        if (board[y][x] > 0) {
            const pos = board[y][x]; // Get the ship number (1-5).
            ships[pos - 1].hit(); // Damage the ship. -1 because arrays start at index 0.
            board[y][x] = 'X'; // Mark the square with an 'X'.
            hitCount += 1;

            if (ships[pos - 1].isSunk()) {
                return 'Hit - ship sunk!';
            }

            return 'Hit!';
        } else {
            board[y][x] = '-'; // Mark the square with a '-'.
            missedCount += 1;

            return 'Miss!';
        }
    }

    return { getBoard, getShips, getHitCount, getMissedCount, checkAllSunk, placeShip, receiveAttack };
}

export { gameboard };