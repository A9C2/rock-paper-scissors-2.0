function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    function lose(winning, losing) {
        return `You Lose! ${winning.charAt(0).toUpperCase() + winning.slice(1)} ${winning === "scissors" ? "beat" : "beats"} ${losing.charAt(0).toUpperCase() + losing.slice(1)}`
    };

    function win(winning, losing) {
        return `You Win! ${winning.charAt(0).toUpperCase() + winning.slice(1)} ${winning === "scissors" ? "beat" : "beats"} ${losing.charAt(0).toUpperCase() + losing.slice(1)}`;
    }

    if (playerSelection === computerSelection) {
        return ["It's a draw!", 0];
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return [win(playerSelection, computerSelection), 1];
        } else {
            return [lose(computerSelection, playerSelection), -1];
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return [win(playerSelection, computerSelection), 1];
        } else {
            return [lose(computerSelection, playerSelection), -1];
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return [win(playerSelection, computerSelection), 1];
        } else {
            return [lose(computerSelection, playerSelection), -1];
        }
    } else {
        alert("You have to select Rock, Paper or Scissors! Press F5 to reload the page.")
        throw "You have to select Rock, Paper or Scissors!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let roundResult = playRound(playerSelection, computerPlay());
        console.log(roundResult[0]);
        let whoWon = roundResult[1];
        if (whoWon === 0) { //Draw
            document.getElementById(`round${i+1}`).innerHTML += "It's a Draw!";
            continue;
        } else if (whoWon === 1) { //Player wins
            playerScore += 1;
            document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
            document.getElementById(`round${i+1}`).innerHTML += "Player Wins!";
        } else { //Computer wins
            computerScore += 1;
            document.getElementById("computer-score").innerHTML = `Computer Score: ${computerScore}`;
            document.getElementById(`round${i+1}`).innerHTML += "Computer Wins!";
        }
    }
    
    alert(`Player scored ${playerScore} ${playerScore !== 1 ? "points" : "point"} and Computer scored ${computerScore} ${computerScore !== 1 ? "points" : "point"}. ${playerScore === computerScore ? "It's a Draw!" : playerScore > computerScore ? "Player Wins!" : "Computer Wins!"}`)
}

game();