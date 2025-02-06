class HashSet {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }
        return hashCode;
    }

    add(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        // Check if key already exists
        for (let item of this.buckets[index]) {
            if (item === key) {
                return; // Key already exists, no need to add
            }
        }

        // Add key to set
        this.buckets[index].push(key);
        this.size++;

        if (this.size / this.capacity >= this.loadFactor) {
            this.resize();
        }
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.size = 0;
        this.buckets = new Array(this.capacity);

        for (let bucket of oldBuckets) {
            if (bucket) {
                for (let key of bucket) {
                    this.add(key);
                }
            }
        }
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket) {
            return bucket.includes(key);
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket) {
            const idx = bucket.indexOf(key);
            if (idx !== -1) {
                bucket.splice(idx, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    size() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        const keys = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                keys.push(...bucket);
            }
        }
        return keys;
    }
}

module.exports = { HashSet };
