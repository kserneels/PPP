// Iterative Fibonacci Function
function fibs(n) {
    let fibArray = [];

    if (n >= 1) fibArray.push(0);
    if (n >= 2) fibArray.push(1);

    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray;
}

// Recursive Fibonacci Function
function fibsRec(n) {
    console.log("This was printed recursively");

    // Base cases
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

    return sequence;
}

// Merge Sort Function
function mergeSort(arr) {
    // Base case: arrays with 1 or 0 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // Recursively split and merge the arrays
    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays until one is empty
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements in both arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Testing Fibonacci Functions
console.log("Testing Iterative Fibonacci (fibs):");
console.log(fibs(8));

console.log("\nTesting Recursive Fibonacci (fibsRec):");
console.log(fibsRec(8));

// Testing Merge Sort
console.log("\nTesting Merge Sort:");
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
