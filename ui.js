console.log("Hello World!")
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

function getComputerChoice() {
    let roll = Math.random()
    let choice;

    if (roll <= 0.33) {
        choice = "rock"
    }
    if (roll > 0.33 && roll <= 0.66) {
        choice = "paper"
    }
    if (roll > 0.66) {
        choice = "scissors"
    }
    return choice;

}


const gameWindow = document.querySelector(".game");
console.log(gameWindow);
//Initialize human score and UI
let humanScore = 0;
const humanScoreUI = document.createElement("div");
const humanScoreCard = document.querySelector(".score.player"); 
humanScoreUI.classList.add("player-score");
humanScoreUI.textContent = humanScore;
humanScoreCard.append(humanScoreUI);


//Initialize computer score and UI
let computerScore = 0;
const computerScoreUI = document.createElement("div");
const computerScoreCard = document.querySelector(".score.computer"); 
computerScoreUI.classList.add("computer-score");
computerScoreUI.textContent = computerScore;
computerScoreCard.append(computerScoreUI);


//Initialize winner message
const winnerMessage = document.createElement("div");
winnerMessage.classList.add("winnerMessage");
winnerMessage.textContent = "";
gameWindow.insertBefore(winnerMessage, document.querySelector(".buttons"));

function humanScores() {
    humanScoreUI.textContent = humanScore;
    winnerMessage.textContent = "Player Wins!";
}

function computerScores() {
    computerScoreUI.textContent = computerScore;
    winnerMessage.textContent = "Computer Wins!";
}
function playRound (human, computer) {
    humanChoice = human
    computerChoice = computer

    if(humanChoice == computerChoice) {
        winnerMessage.textContent = "It's a tie!";
    }

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            computerScores();
        }
        if (computerChoice == "scissors") {
            humanScore++;
            humanScores();
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            humanScores();
        }
        if (computerChoice == "scissors") {
            computerScore++;
            computerScores();
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            computerScores();
        }
        if (computerChoice == "paper") {
            humanScore++;
            humanScores();
        }
    }
    console.log ("Human: " + humanScore + " Computer: " + computerScore);
}