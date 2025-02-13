class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        this.sunk = this.hits >= this.length;
        return this.sunk;
    }
}

export default Ship;
