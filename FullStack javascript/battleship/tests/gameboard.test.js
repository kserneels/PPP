import Gameboard from '../src/gameboard';
import Ship from '../src/ship';

describe('Gameboard', () => {
    test('should place a ship on the board', () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        board.placeShip(ship, [1, 2, 3]);
        expect(board.ships.length).toBe(1);
    });

    test('should receive an attack and register a hit', () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        board.placeShip(ship, [1, 2, 3]);
        const hit = board.receiveAttack(2);
        expect(hit).toBe(true);
        expect(ship.hits).toBe(1);
    });

    test('should record a miss when no ship is hit', () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        board.placeShip(ship, [1, 2, 3]);
        const miss = board.receiveAttack(4);
        expect(miss).toBe(false);
        expect(board.misses.length).toBe(1);
    });

    test('should report if all ships are sunk', () => {
        const board = new Gameboard();
        const ship1 = new Ship(2);
        const ship2 = new Ship(3);
        board.placeShip(ship1, [1, 2]);
        board.placeShip(ship2, [3, 4, 5]);
        ship1.hit();
        ship1.hit();
        ship2.hit();
        ship2.hit();
        ship2.hit();
        expect(board.allSunk()).toBe(true);
    });
});
