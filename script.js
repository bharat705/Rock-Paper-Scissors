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

const subtext = document.querySelector(".subtext");
const resultBox = document.querySelector(".resultBox");
const scoreBox = document.querySelector(".scoreBox");

const humanResultBox = document.createElement("h3");
const computerResultBox = document.createElement("h3");
const resultRemarks = document.createElement("h3");

const humanScoreBox = document.createElement("h2");
const computerScoreBox = document.createElement("h2");

// Function to update score in the screen
function updateScore(human, computer) {
  humanScoreBox.textContent = `Your Score: ${human}`;
  computerScoreBox.textContent = `Computer Score: ${computer}`;
}

// Play the entire game
function playGame(event, humanChoice) {
  event.stopPropagation();
  // Initialize players score variables
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a single round
  function playRound(computerChoice) {
    humanResultBox.textContent = `Your choice = ${humanChoice}`;
    computerResultBox.textContent = `Computer choice = ${computerChoice}`;
    resultBox.append(humanResultBox);
    resultBox.append(computerResultBox);

    if (humanChoice === computerChoice) {
      resultRemarks.textContent = "That's a Draw!! Play Again.";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      updateScore(humanScore, computerScore);
      resultRemarks.textContent = "Congratulations!! You Win. Keep it up! ";
    } else {
      computerScore += 1;
      updateScore(humanScore, computerScore);
      resultRemarks.textContent = `You lose!! ${computerChoice} beats ${humanChoice}`;
    }
    resultBox.append(resultRemarks);
    scoreBox.append(humanScoreBox);
    scoreBox.append(computerScoreBox);
  }

  // Get computer selection
  const computerSelection = getComputerChoice();
  playRound(computerSelection);

  if (humanScore === computerScore) {
    alert(
      `Tight game \n Your Score: ${humanScore}\n Computer Score: ${computerScore}`
    );
  } else if (humanScore > computerScore) {
    alert(
      `Congratulations! you are the champion \n Your Score: ${humanScore}\n Computer Score: ${computerScore}`
    );
  } else {
    alert(
      `You lose!! Better luck next time \n Your Score: ${humanScore}\n Computer Score: ${computerScore}`
    );
  }
}

const buttonBox = document.querySelector(".buttonBox");

buttonBox.addEventListener("click", (e) => {
  playGame(e, e.target.textContent.toLowerCase());
});
