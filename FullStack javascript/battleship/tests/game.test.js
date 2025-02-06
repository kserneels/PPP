import Gameboard from '../src/gameboard';
import Ship from '../src/ship';
import Player from '../src/player';

describe('Game', () => {
    let player1, player2, board1, board2, ship1, ship2;

    beforeEach(() => {
        // Set up the players and boards
        player1 = new Player();
        player2 = new Player();

        board1 = player1.gameboard;
        board2 = player2.gameboard;

        // Set up some ships on each board
        ship1 = new Ship(3);
        ship2 = new Ship(2);

        board1.placeShip(ship1, [1, 2, 3]);
        board1.placeShip(ship2, [4, 5]);
        board2.placeShip(new Ship(3), [1, 2, 3]);
        board2.placeShip(new Ship(2), [4, 5]);
    });

    test('should allow players to attack each other', () => {
        // Player 1 attacks Player 2
        const hit = player1.attack(board2, 2);
        expect(hit).toBe(true);

        // Player 2 attacks Player 1
        const miss = player2.attack(board1, 6);
        expect(miss).toBe(false);
    });

    test('should detect when a ship is sunk', () => {
        // Player 1 attacks Player 2's ship
        player1.attack(board2, 1);
        player1.attack(board2, 2);
        player1.attack(board2, 3);

        // Check if Player 2's ship is sunk
        const ship = board2.ships[0].ship;
        expect(ship.isSunk()).toBe(true);
    });

    test('should detect when all ships are sunk and end the game', () => {
        // Player 1 attacks and sinks all Player 2's ships
        player1.attack(board2, 1);
        player1.attack(board2, 2);
        player1.attack(board2, 3);
        player1.attack(board2, 4);
        player1.attack(board2, 5);

        // Player 2's ships should be sunk
        expect(board2.allSunk()).toBe(true);
    });
});
