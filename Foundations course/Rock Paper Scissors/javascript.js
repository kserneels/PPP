const moves = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

// Function to get random computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// Function to play one round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanScore >= 5 || computerScore >= 5) return; // Stop game if someone won

    let resultMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage += "You win this round!";
        humanScore++;
    } else {
        resultMessage += "Computer wins this round!";
        computerScore++;
    }

    resultDiv.textContent = resultMessage;
    scoreDiv.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;

    checkWinner();
}

// Function to check if there's a winner
function checkWinner() {
    if (humanScore === 5) {
        resultDiv.textContent = "🎉 You won the game!";
    } else if (computerScore === 5) {
        resultDiv.textContent = "💻 Computer won the game!";
    }
}

// Event listeners for buttons
document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));
