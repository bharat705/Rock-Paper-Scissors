let humanScore = 0;
let computerScore = 0;

const buttonBox = document.querySelector(".buttonBox");
const resultBox = document.querySelector(".resultBox");
const scoreBox = document.querySelector(".scoreBox");

const humanResultBox = document.createElement("h3");
const computerResultBox = document.createElement("h3");
const resultRemarks = document.createElement("h3");

const humanScoreBox = document.createElement("h2");
const computerScoreBox = document.createElement("h2");
const scoreRemarks = document.createElement("h1");

buttonBox.addEventListener("click", (e) => {
  playGame(e.target.textContent.toLowerCase());
});

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(humanChoice, computerChoice);
  showResult(humanChoice, computerChoice, result);
  updateScore(result);
  showScore(humanScore, computerScore);
  checkGameOver();
}

// Function to get computer choice using Math.random
function getComputerChoice() {
  let randomValue = Math.random() * 100;
  if (randomValue <= 33) {
    return "rock";
  } else if (randomValue <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(human, computer) {
  if (human === computer) {
    return "draw"
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    return "human"
  } else {
    return "computer"
  }
}

function showResult(humanChoice, computerChoice, result) {
  humanResultBox.textContent = `Your choice = ${humanChoice}`;
  computerResultBox.textContent = `Computer choice = ${computerChoice}`;
  resultBox.append(humanResultBox);
  resultBox.append(computerResultBox);

  if (result === "draw") {
    resultRemarks.textContent = "That's a Draw!! Play Again.";
  } else if (result === "human") {
    resultRemarks.textContent = "Congratulations!! You Win. Keep it up! ";
  } else {
    resultRemarks.textContent = `You lose!! ${computerChoice} beats ${humanChoice}`;
  }
  resultBox.append(resultRemarks);
}

function updateScore(result) {
  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }
  // No points are added if the result is "draw"
}

function showScore() {
  humanScoreBox.textContent = `Your Score: ${humanScore}`;
  computerScoreBox.textContent = `Computer Score: ${computerScore}`;
  scoreBox.append(humanScoreBox);
  scoreBox.append(computerScoreBox);
}

function checkGameOver() {
  if (humanScore === 5) {
    scoreRemarks.textContent = "Congratulations! you are the champion";
    scoreBox.append(scoreRemarks);
    playAgain();
  } else if (computerScore === 5) {
    scoreRemarks.textContent = "Computer wins the game! Better luck next time.";
    scoreBox.append(scoreRemarks);
    playAgain();
  }
}

function playAgain() {
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  scoreBox.append(playAgainButton);
  playAgainButton.addEventListener("click", resetGame);
}
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  resultBox.textContent = "";
  scoreBox.textContent = "";
}
