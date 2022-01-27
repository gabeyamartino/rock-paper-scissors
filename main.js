function computerPlay(moves){
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
}

let possibleMoves = ["Rock", "Paper", "Scissors"]


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors!"
    }  else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "Got 'em!! Paper beats Rock!"
    }  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Scissors beats Paper, so you win this round!"
    }  else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Damn... Paper beats Rock, you lose!"
    }  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "The computer wins this round. Scissors beats paper."
    }  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Rock beats scissors. You lose this round."
    }
}


  function capitalizeFirstLetter(playerSelection) {
      return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  }

  let playerSelection = prompt("Rock, Paper or Scissors?")
  console.log(playerSelection);
  const computerSelection = computerPlay(possibleMoves);
  console.log(computerSelection);
  let areEqual = playerSelection.toUpperCase() === computerSelection.toUpperCase();
  console.log(playRound(playerSelection, computerSelection));

  playRound();
  