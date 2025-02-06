class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;  // Initial bucket size (number of slots)
        this.loadFactor = loadFactor;  // When to resize (0.75 means resize when 75% full)
        this.size = 0;  // Number of items in the hash map
        this.buckets = new Array(capacity);  // Create the array to hold the buckets
    }

    // Hash function that maps a string to an integer
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity; // Ensure hashCode doesn't exceed bucket size
        }
        return hashCode;
    }

    // Set method to add key-value pairs
    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        // Check if key already exists, and if so, update its value
        for (let pair of this.buckets[index]) {
            if (pair[0] === key) {
                pair[1] = value; // Update the value
                return;
            }
        }

        // If not found, add the new key-value pair
        this.buckets[index].push([key, value]);
        this.size++;

        // Check if resize is necessary
        if (this.size / this.capacity >= this.loadFactor) {
            this.resize();
        }
    }

    // Resize the hash map by doubling the capacity
    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.size = 0;
        this.buckets = new Array(this.capacity);

        // Rehash all items and place them in the new buckets
        for (let bucket of oldBuckets) {
            if (bucket) {
                for (let [key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }

    // Get method to retrieve a value by its key
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return pair[1]; // Return the value
                }
            }
        }
        return null; // Key not found
    }

    // Has method to check if a key exists
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return true; // Key found
                }
            }
        }
        return false; // Key not found
    }

    // Remove method to delete a key-value pair
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1); // Remove the key-value pair
                    this.size--;
                    return true; // Successfully removed
                }
            }
        }
        return false; // Key not found
    }

    // Return the number of stored keys
    length() {
        return this.size;
    }

    // Clear all entries in the hash map
    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    // Return an array of all keys
    keys() {
        const keys = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let [key] of bucket) {
                    keys.push(key);
                }
            }
        }
        return keys;
    }

    // Return an array of all values
    values() {
        const values = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let [, value] of bucket) {
                    values.push(value);
                }
            }
        }
        return values;
    }

    // Return an array of [key, value] pairs
    entries() {
        const entries = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    entries.push(pair);
                }
            }
        }
        return entries;
    }
}

module.exports = { HashMap };
