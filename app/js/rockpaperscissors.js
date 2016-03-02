////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var move;
    return move || getInput();
}

function getComputerMove() {
    var move;
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove == "rock"){
        if (computerMove == "rock"){
            winner = "It's a tie";
        } else if (computerMove == "paper"){
            winner = "Computer";
        } else {
            winner = "Player";
        }
    } else if (playerMove == "paper"){
        if (computerMove == "rock"){
            winner = "Player";
        } else if (computerMove == "paper") {
            winner = "It's a tie";
        } else if (computerMove == "scissors") {
            winner = "Computer";
        } 
    } else if (playerMove == "scissors"){
        if (computerMove == "rock") {
            winner = "Computer";
        } else if (computerMove == "paper") {
            winner = "Player";
        } else {
            winner = "It's a tie";
        }
    } else {
        console.log("player move must be either rock, paper or scissors, please try again");
        winner = "neither";
    }
    console.log("Player chose " + playerMove);
    console.log("Computer chose " + computerMove);
    console.log("the Winner is... " + winner);
    return winner;
    
}

function playToFive() {
    console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  var roundCount = 1;
  while(playerWins < 5 && computerWins < 5){
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var winner = getWinner(playerMove, computerMove);
     if (winner == "Player") {
            playerWins ++;
        } else if (winner == "Computer") {
            computerWins ++;
        }

    console.log('The score for round ' + roundCount + " is " + playerWins + ' to ' + computerWins + '\n'); 
    
    roundCount ++;
  
  } 
  
    if (playerWins == 5){
      console.log("Player is the champion!");
  } else {
      console.log("Computer is the champion!");
      
  }
  console.log("This match lasted " + (roundCount - 1) + " rounds." );
  return [playerWins, computerWins];
    
  }

playToFive();





