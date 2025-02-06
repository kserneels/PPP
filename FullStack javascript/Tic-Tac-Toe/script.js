const Gameboard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    const placeMarker = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    return { getBoard, resetBoard, placeMarker };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const GameController = (function () {
    let player1;
    let player2;
    let currentPlayer;
    let gameOver = false;

    const startGame = (name1 = "Player 1", name2 = "Player 2") => {
        player1 = Player(name1, "X");
        player2 = Player(name2, "O");
        currentPlayer = player1;
        Gameboard.resetBoard();
        gameOver = false;
        DisplayController.render();
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                return currentPlayer.name;
            }
        }

        if (!board.includes("")) {
            gameOver = true;
            return "Tie";
        }

        return null;
    };

    const playTurn = (index) => {
        if (!gameOver && Gameboard.placeMarker(index, currentPlayer.marker)) {
            const winner = checkWinner();
            DisplayController.render();
            if (winner) {
                DisplayController.showResult(winner === "Tie" ? "It's a tie!" : `${winner} wins!`);
                return;
            }
            switchPlayer();
        }
    };

    return { startGame, playTurn, getCurrentPlayer: () => currentPlayer };
})();

const DisplayController = (function () {
    const boardElement = document.getElementById("gameboard");
    const resultElement = document.getElementById("result");

    const render = () => {
        boardElement.innerHTML = "";
        Gameboard.getBoard().forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.textContent = cell;
            cellElement.addEventListener("click", () => GameController.playTurn(index));
            boardElement.appendChild(cellElement);
        });
    };

    const showResult = (message) => {
        resultElement.textContent = message;
    };

    return { render, showResult };
})();

document.getElementById("startButton").addEventListener("click", () => {
    GameController.startGame();
});
