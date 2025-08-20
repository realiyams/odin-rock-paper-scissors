let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore(result) {
  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");
  const winnerDiv = document.getElementById("winner");

  resultsDiv.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    winnerDiv.textContent =
      playerScore === 5 ? "🎉 You won the game!" : "💻 Computer won the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => {
  const result = playRound("rock", getComputerChoice());
  updateScore(result);
});

document.getElementById("paper").addEventListener("click", () => {
  const result = playRound("paper", getComputerChoice());
  updateScore(result);
});

document.getElementById("scissors").addEventListener("click", () => {
  const result = playRound("scissors", getComputerChoice());
  updateScore(result);
});