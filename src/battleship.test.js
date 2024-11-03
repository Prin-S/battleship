import { ship } from './ship.js';
import { gameboard } from './gameboard.js';

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

    test('placeShip() - invalid ship length', () => {
        expect(testGameboard.placeShip(-1, 0, 0, 'horizontal')).toBe('The ship length must be from 0 to 5.');
    });

    test('placeShip() - invalid ship length', () => {
        expect(testGameboard.placeShip(6, 0, 0, 'horizontal')).toBe('The ship length must be from 0 to 5.');
    });

    test('placeShip() - invalid X grid position', () => {
        expect(testGameboard.placeShip(2, -1, 0, 'horizontal')).toBe('The grid position must be from 0 to 9.');
    });

    test('placeShip() - invalid Y grid position', () => {
        expect(testGameboard.placeShip(2, 0, 10, 'horizontal')).toBe('The grid position must be from 0 to 9.');
    });

    test('placeShip() - invalid X and Y grid position', () => {
        expect(testGameboard.placeShip(2, -1, 10, 'horizontal')).toBe('The grid position must be from 0 to 9.');
    });

    test('placeShip() horizontal', () => {
        expect(testGameboard.placeShip(5, 2, 3, 'horizontal')).toEqual([
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
        expect(testGameboard.placeShip(5, 6, 0, 'horizontal')).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() horizontal - invalid', () => {
        expect(testGameboard.placeShip(5, 6, 9, 'horizontal')).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() vertical', () => {
        expect(testGameboard.placeShip(4, 5, 1, 'vertical')).toEqual([
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
        expect(testGameboard.placeShip(5, 0, 6, 'vertical')).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() vertical - invalid', () => {
        expect(testGameboard.placeShip(5, 9, 6, 'vertical')).toBe('Invalid position - the ship will fall outside the gameboard.');
    });

    test('placeShip() two times - at least one square is occupied', () => {
        testGameboard.placeShip(5, 2, 3, 'horizontal');
        expect(testGameboard.placeShip(4, 5, 1, 'vertical')).toBe('Invalid position - at least one square is occupied.');
    });

    test('placeShip() two times and then getShips()', () => {
        testGameboard.placeShip(5, 2, 3, 'horizontal');
        testGameboard.placeShip(4, 8, 1, 'vertical');
        expect(testGameboard.getShips()).toEqual([5, 4]);
    });
});