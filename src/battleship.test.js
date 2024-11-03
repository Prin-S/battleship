import { ship } from './ship.js';

describe('ship functions', () => {
    describe('ship one: length = 5', () => {
        const testShip1 = ship(5);

        test('hit() once', () => {
            expect(testShip1.hit()).toBe(1);
        });
    
        test('isSunk(): false', () => {
            expect(testShip1.isSunk()).toBeFalsy();
        });
    });
    
    describe('ship two: length = 2', () => {
        const testShip2 = ship(2);

        test('hit() two times', () => {
            expect(testShip2.hit()).toBe(1);
            expect(testShip2.hit()).toBe(2);
        });

        test('isSunk(): true', () => {
            expect(testShip2.isSunk()).toBeTruthy();
        });
    });
});