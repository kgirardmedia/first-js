console.log("Hello World!")
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
        if (button.id == "reset") {
            resetGame();
        }
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
    if (humanScore < 5 && computerScore < 5) {
        winnerMessage.textContent = "Player played " + humanChoice + " and beat computer, who played " + computerChoice + "!";
    } else {
        winnerMessage.textContent = "PLAYER WINS THE GAME!"
    }
}

function computerScores() {
    computerScoreUI.textContent = computerScore;
    if (humanScore < 5 && computerScore < 5) {
        winnerMessage.textContent = "Computer played " + computerChoice + " and beat player, who played " + humanChoice + "!";
    } else {
        winnerMessage.textContent = "COMPUTER WINS THE GAME!"
    }
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

    if (humanScore == 5 || computerScore == 5) {
        playAgain();
    }
    console.log ("Human: " + humanScore + " Computer: " + computerScore);
}

function playGame(button) {
    if (humanScore < 5 && computerScore < 5) {
        playRound(button, getComputerChoice());
    }
}

function playAgain() {
    let reset = document.getElementById("reset");
    reset.style.display = "block";
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;
    winnerMessage.textContent = "";
    let reset = document.getElementById("reset");
    reset.style.display = "none";
}