const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const restart = document.querySelector("#restart")
rockButton.addEventListener("click", select);
paperButton.addEventListener("click", select);
scissorsButton.addEventListener("click", select);
restart.addEventListener("click", restartGame)

const result = document.querySelector("#result");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const winner = document.querySelector("#winner")

let breaker = false

function restartGame() {
    computerScore.innerHTML = 0;
    userScore.innerHTML = 0;
    winner.innerHTML = "";
    result.innerHTML = "Whoever gets 5 points wins!";
    breaker = false;
    restart.style.width = "100px";
    restart.style.height = "100px";
}

function select(e) {
    playRound(e.target.id, computerPlay())
}



function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (breaker) {
        return;
    }
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    function lose(winning, losing) {
        computerScore.innerHTML = parseInt(computerScore.innerHTML, 10) + 1;
        return `You Lose! ${winning.charAt(0).toUpperCase() + winning.slice(1)} ${winning === "scissors" ? "beat" : "beats"} ${losing.charAt(0).toUpperCase() + losing.slice(1)}.`
    };

    function win(winning, losing) {
        userScore.innerHTML = parseInt(userScore.innerHTML, 10) + 1;
        return `You Win! ${winning.charAt(0).toUpperCase() + winning.slice(1)} ${winning === "scissors" ? "beat" : "beats"} ${losing.charAt(0).toUpperCase() + losing.slice(1)}.`;
    }

    let selections = playerSelection.charAt(0) + computerSelection.charAt(0);

    switch (selections) {
        case "rp":
            result.innerHTML = lose(computerSelection, playerSelection);
            break;
        case "rs":
            result.innerHTML = win(playerSelection, computerSelection);
            break;
        case "pr":
            result.innerHTML = win(playerSelection, computerSelection);
            break;
        case "ps":
            result.innerHTML = lose(computerSelection, playerSelection);
            break;
        case "sr":
            result.innerHTML = lose(computerSelection, playerSelection);
            break;
        case "sp":
            result.innerHTML = win(playerSelection, computerSelection);
            break;
        default:
            result.innerHTML = "It's a draw!";
            break;
    }

    if (userScore.innerHTML == 5) {
        winner.innerHTML = "Player wins!";
        breaker = true;
    } else if (computerScore.innerHTML == 5) {
        winner.innerHTML = "Computer wins!";
        breaker = true;
    }
    if (breaker) {
        restart.style.width = "120px";
        restart.style.height = "120px";
        return;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
}

game();