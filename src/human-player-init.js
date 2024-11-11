import { gameboard } from './gameboard.js';
import { player } from './player.js';
import { createBoard } from './create-board.js';

let humPlayer;

const topBoxDiv = document.querySelector('#box0');
const topBox = document.querySelector('#box0-text1');
const humBoard = document.querySelector('#human-board');
const comBoard = document.querySelector('#computer-board');

const testGameboard = gameboard(); // This is so that placeShip() can be used to test all ship placements.
const playerships = [];

let counter = 0;
let shipSize = 0;

function getPlayerShipPositions() {
    if (counter == 0) {
        shipSize = 5;
    } else if (counter == 1) {
        shipSize = 4;
    } else if (counter == 2 || counter == 3) {
        shipSize = 3;
    } else if (counter == 4) {
        shipSize = 2;
    }

    topBox.innerHTML = `Ship ${counter + 1}: size ${shipSize}`; // Display the current ship number and size.

    const shipInputForm = document.createElement('form');
    shipInputForm.addEventListener('submit', submitShipInputForm);
    
    function submitShipInputForm(event) {
        const submittedStartingX = document.querySelector('#x-axis');
        const submittedStartingY = document.querySelector('#y-axis');
        const submittedDirection = document.querySelector('input[name=ship-direction]:checked');

        const returnFromTestGameboard = testGameboard.placeShip(shipSize, Number(submittedStartingX.value), Number(submittedStartingY.value), Number(submittedDirection.value));

        if (typeof returnFromTestGameboard != 'string') { // Only push the values into playerships if returnFromTestGameboard is valid.
            playerships.push([submittedStartingX.value, submittedStartingY.value, submittedDirection.value]);
            counter++;

            if (counter < 5) { // Repeat until there are five ships.
                shipInputForm.innerHTML = ''; // Remove the previous form.
                
                getPlayerShipPositions();
            }

            if (counter >= 5) { // Once there are five ships,
                humPlayer = player('hum', playerships); // Create the human player, passing in playerships.
                topBox.innerHTML = `Click on a square on the computer's board to attack.`; // Change the text at the top of the page.
                shipInputForm.innerHTML = ''; // Remove the previous form.
                
                createBoard(humBoard, 'hum'); // Create the gameboard for the human player.
                createBoard(comBoard, 'com'); // Create the gameboard for the computer player.
            }
        } else {
            topBox.innerHTML = `Ship ${counter + 1}: size ${shipSize}<p>${returnFromTestGameboard}</p>`; // Display the message explaining why the values are invalid.
        }

        event.preventDefault();
    }

    const startingXInputText = document.createElement('p');
    startingXInputText.setAttribute('for', 'x-axis');
    startingXInputText.innerHTML = 'Starting x-axis: ';
    
    const startingXInputBox = document.createElement('input');
    startingXInputBox.setAttribute('id', 'x-axis');
    startingXInputBox.setAttribute('type', 'number');
    startingXInputBox.setAttribute('name', 'x-axis');
    startingXInputBox.setAttribute('size', 1);
    startingXInputBox.setAttribute('min', 0);
    startingXInputBox.setAttribute('max', 9);
    startingXInputBox.setAttribute('required', '');
    
    const startingYInputText = document.createElement('p');
    startingYInputText.setAttribute('for', 'y-axis');
    startingYInputText.innerHTML = 'Starting y-axis: ';
    
    const startingYInputBox = document.createElement('input');
    startingYInputBox.setAttribute('id', 'y-axis');
    startingYInputBox.setAttribute('type', 'number');
    startingYInputBox.setAttribute('name', 'y-axis');
    startingYInputBox.setAttribute('size', 1);
    startingYInputBox.setAttribute('min', 0);
    startingYInputBox.setAttribute('max', 9);
    startingYInputBox.setAttribute('required', '');

    const directionInputText = document.createElement('p');
    directionInputText.setAttribute('for', 'ship-direction');
    directionInputText.innerHTML = 'Direction:';
    
    const directionInputBoxHorizontal = document.createElement('input');
    directionInputBoxHorizontal.setAttribute('id', 'horizontal');
    directionInputBoxHorizontal.setAttribute('type', 'radio');
    directionInputBoxHorizontal.setAttribute('name', 'ship-direction');
    directionInputBoxHorizontal.setAttribute('required', '');
    directionInputBoxHorizontal.setAttribute('value', 0);

    const directionInputBoxHorizontalLabel = document.createElement('label');
    directionInputBoxHorizontalLabel.setAttribute('for', 'horizontal');
    directionInputBoxHorizontalLabel.innerHTML = 'Horizontal';

    const directionInputBoxVertical = document.createElement('input');
    directionInputBoxVertical.setAttribute('id', 'vertical');
    directionInputBoxVertical.setAttribute('type', 'radio');
    directionInputBoxVertical.setAttribute('name', 'ship-direction');
    directionInputBoxVertical.setAttribute('required', '');
    directionInputBoxVertical.setAttribute('value', 1);

    const directionInputBoxVerticalLabel = document.createElement('label');
    directionInputBoxVerticalLabel.setAttribute('for', 'vertical');
    directionInputBoxVerticalLabel.innerHTML = 'Vertical';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Submit';
    
    startingXInputText.appendChild(startingXInputBox);
    startingYInputText.appendChild(startingYInputBox);
    directionInputText.appendChild(directionInputBoxHorizontal);
    directionInputText.appendChild(directionInputBoxHorizontalLabel);
    directionInputText.appendChild(directionInputBoxVertical);
    directionInputText.appendChild(directionInputBoxVerticalLabel);

    shipInputForm.appendChild(startingXInputText);
    shipInputForm.appendChild(startingYInputText);
    shipInputForm.appendChild(directionInputText);
    shipInputForm.appendChild(submitButton);

    topBoxDiv.appendChild(shipInputForm); 
}

export { getPlayerShipPositions, humPlayer };