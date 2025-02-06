import Player from './player';
import Gameboard from './gameboard';

class Game {
    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.currentPlayer = this.player1;
        this.winner = null;
    }

    switchTurn() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    playTurn(coordinate) {
        const enemyBoard = this.currentPlayer === this.player1 ? this.player2.gameboard : this.player1.gameboard;

        // Attack the enemy board
        const result = this.currentPlayer.attack(enemyBoard, coordinate);

        // Check if the game has ended
        if (this.player1.gameboard.allSunk()) {
            this.winner = this.player2;
        } else if (this.player2.gameboard.allSunk()) {
            this.winner = this.player1;
        } else {
            this.switchTurn();  // Switch turn if the game isn't over
        }

        return result;  // Return the result of the attack (true for hit, false for miss)
    }

    getWinner() {
        return this.winner ? this.winner : null;
    }
}

export default Game;
