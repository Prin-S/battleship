import { ship } from './ship.js';
import { gameboard } from './gameboard.js';
import { player } from './player.js';

describe('ship functions', () => {
    describe('ship one: length = 5', () => {
        const testShip1 = ship(5);

        test('getShipLength()', () => {
            expect(testShip1.getShipLength()).toBe(5);
        });

        test('hit() once', () => {
            expect(testShip1.hit()).toBe(1);
        });
    
        test('isSunk(): false', () => {
            expect(testShip1.isSunk()).toBeFalsy();
        });
    });
    
    describe('ship two: length = 2', () => {
        const testShip2 = ship(2);

        test('getShipLength()', () => {
            expect(testShip2.getShipLength()).toBe(2);
        });

        test('hit() two times', () => {
            expect(testShip2.hit()).toBe(1);
            expect(testShip2.hit()).toBe(2);
        });

        test('isSunk(): true', () => {
            expect(testShip2.isSunk()).toBeTruthy();
        });
    });
});

describe('gameboard functions', () => {
    let testGameboard = gameboard();
    
    beforeEach(() => {
        testGameboard = gameboard();
    });

    test('getBoard()', () => {
        expect(testGameboard.getBoard()).toEqual(new Array(10).fill(new Array(10).fill(0)));
    });

    test('trying to placeShip() the sixth time', () => {
        testGameboard.placeShip(1, 2, 3, 0);
        testGameboard.placeShip(1, 8, 1, 1);
        testGameboard.placeShip(1, 0, 0, 0);
        testGameboard.placeShip(1, 9, 9, 1);
        testGameboard.placeShip(1, 4, 4, 0);

        expect(testGameboard.placeShip(1, 7, 7, 1)).toBe('The maximum number of ships (5) has been reached.');
    });

    test('placeShip() - invalid ship length', () => {
        expect(testGameboard.placeShip(-1, 0, 0, 0)).toBe('The ship length must be from 0 to 5.');
    });

    test('placeShip() - invalid ship length', () => {
        expect(testGameboard.placeShip(6, 0, 0, 0)).toBe('The ship length must be from 0 to 5.');
    });

    test('placeShip() - invalid X grid position', () => {
        expect(testGameboard.placeShip(2, -1, 0, 0)).toBe('The grid position must be from 0 to 9.');
    });

    test('placeShip() - invalid Y grid position', () => {
        expect(testGameboard.placeShip(2, 0, 10, 0)).toBe('The grid position must be from 0 to 9.');
    });

    test('placeShip() - invalid X and Y grid position', () => {
        expect(testGameboard.placeShip(2, -1, 10, 0)).toBe('The grid position must be from 0 to 9.');
    });

    test('placeShip() horizontal', () => {
        expect(testGameboard.placeShip(5, 2, 3, 0)).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);
    });

    test('placeShip() horizontal - invalid', () => {
        expect(testGameboard.placeShip(5, 6, 0, 0)).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() horizontal - invalid', () => {
        expect(testGameboard.placeShip(5, 6, 9, 0)).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() vertical', () => {
        expect(testGameboard.placeShip(4, 5, 1, 1)).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);
    });

    test('placeShip() vertical - invalid', () => {
        expect(testGameboard.placeShip(5, 0, 6, 1)).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() vertical - invalid', () => {
        expect(testGameboard.placeShip(5, 9, 6, 1)).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() two times - at least one square is occupied', () => {
        testGameboard.placeShip(5, 2, 3, 0);

        expect(testGameboard.placeShip(4, 5, 1, 1)).toBe('Invalid position - at least one square is occupied.');
    });

    test('placeShip() two times and then getShips().length', () => {
        testGameboard.placeShip(5, 2, 3, 0);
        testGameboard.placeShip(4, 8, 1, 1);

        expect(testGameboard.getShips().length).toBe(2);
    });

    test('placeShip() five times', () => {
        testGameboard.placeShip(5, 2, 3, 0);
        testGameboard.placeShip(4, 8, 1, 1);
        testGameboard.placeShip(3, 0, 0, 0);
        testGameboard.placeShip(3, 9, 7, 1);
        testGameboard.placeShip(2, 4, 4, 0);

        expect(testGameboard.getBoard()).toEqual([
            [3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 2, 0],
            [0, 0, 0, 0, 5, 5, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4]
        ]);
    });

    test('placeShip() five times and then receiveAttack(), getHitCount(), and getMissedCount()', () => {
        testGameboard.placeShip(5, 2, 3, 0);
        testGameboard.placeShip(4, 8, 1, 1);
        testGameboard.placeShip(3, 0, 0, 0);
        testGameboard.placeShip(3, 9, 7, 1);
        testGameboard.placeShip(2, 4, 4, 0);

        expect(testGameboard.receiveAttack(4, 4)).toBe('Hit!');
        expect(testGameboard.receiveAttack(2, 2)).toBe('Miss!');
        expect(testGameboard.receiveAttack(5, 4)).toBe('Hit - ship sunk!');
        expect(testGameboard.receiveAttack(4, 4)).toBe('The square has already been selected - hit.');
        expect(testGameboard.receiveAttack(2, 2)).toBe('The square has already been selected - miss.');
        expect(testGameboard.receiveAttack(5, 4)).toBe('The square has already been selected - hit.');
        expect(testGameboard.getHitCount()).toBe(2);
        expect(testGameboard.getMissedCount()).toBe(1);
    });

    test('placeShip() five times, receiveAttack(), and checkAllSunk()', () => {
        testGameboard.placeShip(1, 2, 3, 0);
        testGameboard.placeShip(1, 8, 1, 1);
        testGameboard.placeShip(1, 0, 0, 0);
        testGameboard.placeShip(1, 9, 7, 1);
        testGameboard.placeShip(1, 4, 4, 0);
        testGameboard.receiveAttack(2, 3);
        testGameboard.receiveAttack(8, 1);
        testGameboard.receiveAttack(0, 0);
        testGameboard.receiveAttack(9, 7);
        
        expect(testGameboard.checkAllSunk()).toBeFalsy();
        
        testGameboard.receiveAttack(4, 4);
        
        expect(testGameboard.checkAllSunk()).toBeTruthy();
    });
});

describe('player functions', () => {

});