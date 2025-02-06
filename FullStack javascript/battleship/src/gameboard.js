import Ship from './ship';

class Gameboard {
    constructor() {
        this.ships = [];
        this.misses = [];
    }

    placeShip(ship, coordinates) {
        this.ships.push({ ship, coordinates });
    }

    receiveAttack(coordinate) {
        for (let { ship, coordinates } of this.ships) {
            if (coordinates.includes(coordinate)) {
                ship.hit();
                return true; // Hit
            }
        }
        this.misses.push(coordinate);
        return false; // Miss
    }

    allSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }
}

export default Gameboard;
