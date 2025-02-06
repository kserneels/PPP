// utils.js

// Pretty Print Function for visualizing the tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) return;
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

// Random Number Generator (optional)
const randomNumberGenerator = (count, max) => {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * max));
    }
    return numbers;
};

module.exports = { prettyPrint, randomNumberGenerator };
