import Gameboard from './gameboard';

class Player {
    constructor(isComputer = false) {
        this.gameboard = new Gameboard();
        this.isComputer = isComputer;
    }

    attack(enemyBoard, coordinate) {
        return enemyBoard.receiveAttack(coordinate);
    }
}

export default Player;
