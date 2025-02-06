import Gameboard from '../src/gameboard';
import Ship from '../src/ship';
import Player from '../src/player';

describe('Player', () => {
    let player1, player2, board1, board2, ship1;

    beforeEach(() => {
        // Set up the players and boards
        player1 = new Player();
        player2 = new Player();

        board1 = player1.gameboard;
        board2 = player2.gameboard;

        // Set up ships on the boards
        ship1 = new Ship(3);
        board1.placeShip(ship1, [1, 2, 3]);
        board2.placeShip(new Ship(3), [4, 5, 6]);
    });

    test('should have a gameboard', () => {
        expect(player1.gameboard).toBeInstanceOf(Gameboard);
        expect(player2.gameboard).toBeInstanceOf(Gameboard);
    });

    test('should be able to attack another player', () => {
        // Player 1 attacks Player 2
        const attackResult = player1.attack(board2, 4);
        expect(attackResult).toBe(true);  // Hit Player 2's ship at coordinate 4
    });

    test('should record a miss when attacking an empty space', () => {
        // Player 1 attacks an empty space
        const miss = player1.attack(board2, 7);
        expect(miss).toBe(false);  // Coordinate 7 is empty, so it's a miss
    });
});
