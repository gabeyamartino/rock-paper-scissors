function computerPlay(moves){
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
}

let possibleMoves = ["Rock", "Paper", "Scissors"]
let result;

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
}

  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(playerSelection);
  let computerSelection = computerPlay(possibleMoves).toLowerCase();
    console.log(computerSelection);


function game() {
    function callPromptFunction(){
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    function callRandomComputer(){
        computerSelection = computerPlay(possibleMoves).toLowerCase();
    }
    for (let i = 1; i <= 5; i++) {
        playRound(playerSelection, computerSelection);
        if (result=="player") {
            playerPoints += 1
        }  else if (result=="computer") {
            computerPoints += 1
        }  else if (result == "tie") {
            
        }
        console.log("Player " + playerPoints)
        console.log("Computer " + computerPoints)
        callPromptFunction();
        callRandomComputer();
    }
    if (playerPoints > computerPoints) {
        alert("Congratulations! You won the game!")
    } else if (playerPoints< computerPoints) {
        alert("Uh oh... You lose!!!")
    } else alert ("It's a tie! Refresh to try again.")
}
let a = 0;
let b = 0;
let playerPoints = 0;
let computerPoints = 0;

game();
