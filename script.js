
function handleClick(playerSelection) {
    if (isGameOver()) {
        return;
    }

    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}



// LOGIC
const cases = ['rock', 'paper', 'scissors'];
const rockDraw = '✊';
const paperDraw = '✋';
const scissorsDraw = '✌';
let playerSign = '❔'; 
let computerSign = '❔';


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
        else if (computerSelection == 'paper') {
            computerScore++; 
            computerSign = paperDraw; 
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
    }
    else if (playerSelection == 'paper') {
        playerSign = paperDraw;
        if (computerSelection == 'scissors') {

        } 
        else if (computerSelection == 'rock') {

        }
    }

    if (checkEquality) {
        playerScore = prePlayer; 
        computerScore = preComputer;
    }

    document.getElementById('playerSign').innerText = playerSign;
    document.getElementById('computerSign').innerText = computerSign;

    // winner = ???
    // document.getElementById("winner").innerText = winner;
}
