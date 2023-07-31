
function handleClick(playerSelection) {
    if (isGameOver()) {
        return;
    }
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

const cases = ['rock', 'paper', 'scissors'];
const rockDraw = '✊';
const paperDraw = '✋';
const scissorsDraw = '✌';

let playerSign = '🧐'; 
let computerSign = '🧐';
let playerScore = 0; 
let computerScore = 0; 

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        playerSign = rockDraw;
        if (computerSelection == 'scissors') {
            playerScore++; 
            computerSign = scissorsDraw;
        }
        else if (computerSelection == 'paper') {
            computerScore++; 
            computerSign = paperDraw; 
        }
        else if (computerSelection == 'rock') {
            computerSign = rockDraw; 
        }
    }
    else if (playerSelection == 'scissors') {
        playerSign = scissorsDraw;
        if (computerSelection == 'paper') {
            playerScore++; 
            computerSign = paperDraw;
        }
        else if (computerSelection == 'rock') {
            computerScore++; 
            computerSign = rockDraw;
        }
        else if (computerSelection == 'scissors') {
            computerSign = scissorsDraw; 
        }
    }
    else if (playerSelection == 'paper') {
        playerSign = paperDraw;
        if (computerSelection == 'scissors') {
            computerScore++; 
            computerSign = scissorsDraw;
        } 
        else if (computerSelection == 'rock') {
            playerScore++; 
            computerSign = rockDraw;
        }
        else if (computerSelection == 'paper') {
            computerSign = paperDraw; 
        }
    }

    document.getElementById('playerSign').innerText = playerSign;
    document.getElementById('computerSign').innerText = computerSign;
    document.getElementById('playerScore').innerText = "Player ⚟ " + playerScore; 
    document.getElementById('computerScore').innerText = "Computer ⚟ " + computerScore; 

    if (isGameOver()) {
        if (playerScore > computerScore) winner = "Congrats 🎉";
        else winner = "Good Luck 😔";
         document.getElementById("winner").innerText = winner;
    }
}

function getComputerChoice() {
    return cases[parseInt(Math.random() * 100) % 3];
}

function isGameOver() {
    return playerScore == 5 || computerScore == 5; 
}