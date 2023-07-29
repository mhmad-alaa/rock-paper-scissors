
// LOGIC
cases = ["rock", "papper", "scissors"];

function getComputerChoice() {
    return cases[parseInt(Math.random() * 100) % 3];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != computerSelection) {

        if (playerSelection == "rock") {
            if (computerSelection == "scissors") return 'player';
            else return "computer"; // papper
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "papper") return "player";
            else return "computer"; // rock
        }

        if (computerSelection == "rock") {
            if (playerSelection == "scissors") return "computer";
            else return "player"; // papper
        }
        else if (computerSelection == "scissors") {
            if (playerSelection == "papper") return "computer";
            else return "player"; // rock
        }
    }
    else return "win-win";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


// UI

