// index.js

const { Tree } = require('./tree');
const { prettyPrint, randomNumberGenerator } = require('./utils');

// Generate an array of random numbers and build the tree
const randomNumbers = randomNumberGenerator(15, 100);
const tree = new Tree(randomNumbers);

console.log("Original Tree:");
prettyPrint(tree.root);

// Add more numbers, delete, or manipulate the tree as needed
tree.insert(50);  // Insert a new number
tree.deleteItem(10);  // Delete a number

console.log("Modified Tree:");
prettyPrint(tree.root);

// Check if the tree is balanced
console.log("Is the tree balanced?", tree.isBalanced());

// Rebalance the tree
tree.rebalance();
console.log("Rebalanced Tree:");
prettyPrint(tree.root);

// Check again if the tree is balanced
console.log("Is the tree balanced after rebalance?", tree.isBalanced());
