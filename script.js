// LOGIC
const cases = ['rock', 'paper', 'scissors'];
const rockDraw = '✊';
const paperDraw = '✋';
const scissorsDraw = '✌';


let playerScore = 0; 
let computerScore = 0; 


function getComputerChoice() {
    return cases[parseInt(Math.random() * 100) % 3];
}

function isGameOver() {
    return playerScore == 5 || computerScore == 5; 
}

function playRound(playerSelection, computerSelection) {
    let checkEquality = playerSelection == computerSelection;
    const prePlayer = playerScore;  
    const preComputer = computerScore; 

    if (playerSelection == 'rock') {
        playerSign = rockDraw;

        if (computerSelection == 'scissors') {
            playerScore++; 
            computerSign = scissorsDraw;
        }
        else {
            computerScore++; 
            computerSign = paperDraw; // paper
        }
    }
    else if (playerSelection == 'scissors') {
        playerSign = scissorsDraw;
        if (computerSelection == 'paper') {
            playerScore++; 
            computerSign = paperDraw;
        }
        else {
            computerScore++; 
            computerSign = rockDraw; // rock
        }
    }

    if (computerSelection == 'rock') {
        console.log("hello"); 
        computerSign = rockDraw;

        if (playerSelection == 'scissors') {
            computerScore++; 
            playerSign = scissorsDraw;
        }
        else {
            playerScore++; 
            playerSign = paperDraw; // paper
        }
    }
    else if (computerSelection == 'scissors') {
        computerSign = scissorsDraw;

        if (playerSelection == 'paper') {
            computerScore++; 
            playerSign = paperDraw;
        }
        else {
            playerScore++; 
            playerSign = rockDraw; // rock
        }
    }

    if (checkEquality) {
        playerScore = prePlayer; 
        computerScore = preComputer;
    }

    playerSign.textContent = playerSign; 
    computerSign.textContent = computerSign;
}




// UI

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

// const rock = document.getElementById('rockBtn'); 
// const paper = document.getElementById('rockBtn'); 
// const scissors = document.getElementById('scissorsBtn');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');


rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));


function handleClick(playerSelection) {
    if (isGameOver()) {
        return;
    }

    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

  