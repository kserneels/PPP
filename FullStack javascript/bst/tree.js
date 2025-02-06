// tree.js

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    // Helper function to build the tree
    buildTree(array) {
        const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
        return this._buildTreeHelper(uniqueSortedArray);
    }

    // Recursively build the balanced BST
    _buildTreeHelper(array) {
        if (array.length === 0) return null;
        const midIndex = Math.floor(array.length / 2);
        const node = new Node(array[midIndex]);
        node.left = this._buildTreeHelper(array.slice(0, midIndex));
        node.right = this._buildTreeHelper(array.slice(midIndex + 1));
        return node;
    }

    // Insert value
    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(node, value) {
        if (node === null) return new Node(value);
        if (value < node.data) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.data) {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    // Delete value
    deleteItem(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.data) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.data) {
            node.right = this._deleteNode(node.right, value);
        } else {
            // Node found
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                // Node with two children: get the inorder successor (smallest in the right subtree)
                let minNode = this._findMin(node.right);
                node.data = minNode.data;
                node.right = this._deleteNode(node.right, minNode.data);
            }
        }
        return node;
    }

    // Find minimum value node in the tree
    _findMin(node) {
        while (node.left !== null) node = node.left;
        return node;
    }

    // Find node with a given value
    find(value) {
        return this._findNode(this.root, value);
    }

    _findNode(node, value) {
        if (node === null || node.data === value) return node;
        if (value < node.data) {
            return this._findNode(node.left, value);
        } else {
            return this._findNode(node.right, value);
        }
    }

    // Level-order traversal
    levelOrder(callback) {
        if (typeof callback !== "function") throw new Error("A callback function is required.");

        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            const currentNode = queue.shift();
            callback(currentNode);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    // In-order traversal
    inOrder(callback) {
        if (typeof callback !== "function") throw new Error("A callback function is required.");
        this._inOrderTraversal(this.root, callback);
    }

    _inOrderTraversal(node, callback) {
        if (node === null) return;
        this._inOrderTraversal(node.left, callback);
        callback(node);
        this._inOrderTraversal(node.right, callback);
    }

    // Pre-order traversal
    preOrder(callback) {
        if (typeof callback !== "function") throw new Error("A callback function is required.");
        this._preOrderTraversal(this.root, callback);
    }

    _preOrderTraversal(node, callback) {
        if (node === null) return;
        callback(node);
        this._preOrderTraversal(node.left, callback);
        this._preOrderTraversal(node.right, callback);
    }

    // Post-order traversal
    postOrder(callback) {
        if (typeof callback !== "function") throw new Error("A callback function is required.");
        this._postOrderTraversal(this.root, callback);
    }

    _postOrderTraversal(node, callback) {
        if (node === null) return;
        this._postOrderTraversal(node.left, callback);
        this._postOrderTraversal(node.right, callback);
        callback(node);
    }

    // Height of the node
    height(node) {
        if (node === null) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    // Depth of the node
    depth(node) {
        let currentNode = this.root;
        let depth = 0;

        while (currentNode !== null) {
            if (node.data === currentNode.data) return depth;
            if (node.data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            depth++;
        }
        return -1;  // Node not found
    }

    // Check if the tree is balanced
    isBalanced() {
        return this._isBalancedNode(this.root);
    }

    _isBalancedNode(node) {
        if (node === null) return true;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return this._isBalancedNode(node.left) && this._isBalancedNode(node.right);
    }

    // Rebalance the tree
    rebalance() {
        const elements = [];
        this.inOrder(node => elements.push(node.data));
        this.root = this.buildTree(elements);
    }
}

module.exports = { Node, Tree };
