// Function to get computer choice using Math.random
function getComputerChoice() {
    let randomValue = Math.random()*100;
    if (randomValue <= 33) {
        return "rock";
    } else if(randomValue <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Function to prompt user for choice
function getHumanChoice() {
    let humanChoice = prompt("Please enter one: Rock/Paper/Scissor");
    return humanChoice;
}

// Play the entire game

function playGame() {

    // Initialize players score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round 
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(`Computer choice = ${computerChoice}`);
        console.log(`Your choice = ${humanChoice}`);
        if(humanChoice === computerChoice) {
            return console.log("Draw!! Play Again.");
        }
        else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ) {
            humanScore += 1;
            console.log('Congratulations!! You Win. ');
        } else {
            computerScore += 1;
            console.log(`You lose!! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 1; i<=5; i++) {
        // Get human and computer selection 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore) {
        alert(`Tight game \n Your Score: ${humanScore}\n Computer Score: ${computerScore}`);
    } else if (humanScore > computerScore) {
        alert(`Congratulations! you are the champion \n Your Score: ${humanScore}\n Computer Score: ${computerScore}`);
    } else {
        alert(`You lose!! Better luck next time \n Your Score: ${humanScore}\n Computer Score: ${computerScore}`);
    }
}

playGame();