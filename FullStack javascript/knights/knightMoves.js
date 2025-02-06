// knightMoves.js

// Define the 8 possible moves a knight can make
const knightMoves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
];

// Check if a position is within the bounds of the board
function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// BFS setup: queue stores [current_position, path_so_far]
function knightMovesBFS(start, end) {
    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(JSON.stringify(start)); // Store positions as string to avoid duplicates

    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();

        // If we reach the target, return the path
        if (JSON.stringify(currentPos) === JSON.stringify(end)) {
            document.getElementById('output').textContent = `You made it in ${path.length - 1} moves! Here's your path:\n` + path.map(p => JSON.stringify(p)).join('\n');
            return path;
        }

        // Explore all possible moves
        for (let [dx, dy] of knightMoves) {
            let newX = currentPos[0] + dx;
            let newY = currentPos[1] + dy;
            let newPos = [newX, newY];

            if (isValid(newX, newY) && !visited.has(JSON.stringify(newPos))) {
                visited.add(JSON.stringify(newPos));
                queue.push([newPos, [...path, newPos]]);
            }
        }
    }
}

// Call the knightMovesBFS function with a start and end position
knightMovesBFS([0, 0], [7, 7]); // Example case (you can change these to test others)
