function computerPlay(){
    let possibleMoves = ["Rock", "Paper", "Scissors"]
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie!")
        result = "tie"
    }  else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You win! Rock beats Scissors!")
        result = "player"
    }  else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("Got 'em!! Paper beats Rock!")
        result = "player"
    }  else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("Scissors beats Paper, so you win this round!")
        result = "player" 
    }  else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Damn... Paper beats Rock, you lose!")
        result = "computer"
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("The computer wins this round. Scissors beats paper.")
        result = "computer"
    }  else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("Rock beats scissors. You lose this round.")
        result = "computer"
        return result
    }

playerSelection
console.log(playerSelection);
computerSelection = computerPlay().toLowerCase();
}

function game() {

  let playerPoints = 0;
  let computerPoints = 0;

    function callPromptFunction(){
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    function callRandomComputer(){
        computerSelection = computerPlay().toLowerCase();
    }
    for (let i = 1; i <= 5; i++) {

        callRandomComputer();
        playRound(playerSelection, computerSelection);
        if (result==="player") {
            playerPoints += 1
        }  else if (result==="computer") {
            computerPoints += 1
        }  else (result==="tie")
        console.log("Player: " + playerPoints)
        console.log("Computer: " + computerPoints)
    }
    if (playerPoints > computerPoints) {
        alert("Congratulations! You won the game!")
    } else if (playerPoints< computerPoints) {
        alert("Uh oh... You lose!!!")
    } else alert ("It's a tie! Refresh to try again.")
}

let container = document.querySelector('.threeButtons');
let buttons = document.querySelectorAll('button');
let button = document.querySelectorAll('button');

playerSelection = button.id;
computerSelection = computerPlay().toLowerCase();
playerPoints = 0;
computerPoints = 0;
let result;

const outcome = document.querySelector('.score');
outcome.style.background = ('pink');
outcome.style.borderStyle = ('solid');
outcome.style.borderWidth = ('2px');
outcome.style.borderColor = ('black');

const results = document.querySelector('.result');
results.style.background = ('blue');
results.style.borderStyle = ('solid');
results.style.borderWidth = ('2px');

document.body.appendChild(outcome);

const endgame = document.querySelector('.end');
endgame.style.borderStyle = ('solid');
endgame.style.borderWidth = ('2px');
document.body.appendChild(endgame);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay().toLowerCase();
        console.log(playerSelection);
        console.log(computerSelection);


            if (playerSelection === "rock" && computerSelection === "scissors") {
            results.textContent = ("You win! Rock beats Scissors!");
            result = "player";
        }  else if (playerSelection === "paper" && computerSelection === "rock") {
            results.textContent = ("Got 'em!! Paper beats Rock!");
            result = "player";
        }  else if (playerSelection === "scissors" && computerSelection === "paper") {
            results.textContent = ("Scissors beats Paper, so you win this round!");
            result = "player" ;
        }  else if (playerSelection === "rock" && computerSelection === "paper") {
            results.textContent = ("Damn... Paper beats Rock, you lose!");
            result = "computer";
        }  else if (playerSelection === "paper" && computerSelection === "scissors") {
            results.textContent = ("The computer wins this round. Scissors beats paper.");
            result = "computer";
        }  else if (playerSelection === "scissors" && computerSelection === "rock") {
            results.textContent = ("Rock beats scissors. You lose this round.");
            result = "computer";
        }  else if (playerSelection === computerSelection) {
            results.textContent = ("It's a tie!");
            result = "tie";
            return result;
        }
            

            console.log(result)
            if (result==="player") {
                playerPoints += 1
            }  else if (result==="computer") {
                computerPoints += 1
            }  else (result==="tie");
            outcome.textContent = "Player: " + playerPoints + "\nComputer: " + computerPoints;

            if (playerPoints === 5) {
                endgame.textContent = ("Congratulations! You won the game! Please refresh the page to play again.");
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;

            }   else if (computerPoints === 5) {
                endgame.textContent = ("The computer wins this time... Please refresh the page to play again.")
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;

            };
    
            //work on capping the game at 5 points per player

    });
});

















