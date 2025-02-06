// Node class represents each node in the linked list
class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

// LinkedList class represents the linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Append a new node with the given value at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Prepend a new node with the given value at the start of the list
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Return the size of the list
    getSize() {
        return this.size;
    }

    // Return the first node in the list
    headNode() {
        return this.head;
    }

    // Return the last node in the list
    tailNode() {
        return this.tail;
    }

    // Return the node at the specified index
    at(index) {
        if (index < 0 || index >= this.size) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    // Remove the last node from the list
    pop() {
        if (this.size === 0) return;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== this.tail) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            this.tail = currentNode;
        }
        this.size--;
    }

    // Check if a value is in the list
    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    // Find the index of the node containing the given value
    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    // Convert the linked list to a string representation
    toString() {
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        return result + 'null';
    }

    // Insert a new node at a given index
    insertAt(value, index) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.nextNode;
        }
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        this.size++;
    }

    // Remove a node at a given index
    removeAt(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head.nextNode;
            if (!this.head) this.tail = null;
            this.size--;
            return;
        }

        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = currentNode.nextNode ? currentNode.nextNode.nextNode : null;
        if (!currentNode.nextNode) this.tail = currentNode;
        this.size--;
    }
}

export { LinkedList };
