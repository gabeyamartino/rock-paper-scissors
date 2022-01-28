function computerPlay(moves){
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
}

let possibleMoves = ["Rock", "Paper", "Scissors"]


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }  else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors!"
    }  else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Got 'em!! Paper beats Rock!"
    }  else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors beats Paper, so you win this round!"
    }  else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Damn... Paper beats Rock, you lose!"
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "The computer wins this round. Scissors beats paper."
    }  else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Rock beats scissors. You lose this round."
    }  
}

  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(playerSelection);
  const computerSelection = computerPlay(possibleMoves).toLowerCase();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

function game(rounds) {

}
(playRound(playerSelection, computerSelection);
(playRound(playerSelection, computerSelection);
(playRound(playerSelection, computerSelection);
(playRound(playerSelection, computerSelection);
(playRound(playerSelection, computerSelection);
  