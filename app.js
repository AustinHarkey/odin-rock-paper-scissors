// var computerSelection;  // you don't need these lame globals just pass the functions as args
// var playerSelection;
var compScore = 0;
var playScore = 0;

function computerPlay() {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else {
        return  'scissors';
    }
}

function playerPick() {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {                  // this is a terrible way to do this logic 
        if(computerSelection === 'rock') {
            console.log('Tie');
            return 'Its a tie!! You both picked ' + playerSelection;
        } else if (computerSelection === 'paper') {
            compScore++;
            console.log(playScore, compScore);
            return 'You lose! ' + computerSelection + ' beats your ' + playerSelection;
        } else if (computerSelection === 'scissors') {
            playScore++;
            console.log(playScore, compScore);
            return 'You win! ' + playerSelection + ' beats the computers ' + computerSelection;
        }
    } else if (playerSelection === 'paper') {
        if(computerSelection === 'paper') {
            console.log('Tie');
            return 'Its a tie!! You both picked ' + playerSelection;
        } else if (computerSelection === 'scissors') {
            compScore++;
            console.log(playScore, compScore);
            return 'You lose! ' + computerSelection + ' beats your ' + playerSelection;
        } else if (computerSelection === 'rock') {
            playScore++;
            console.log(playScore, compScore);
            return 'You win! ' + playerSelection + ' beats the computers ' + computerSelection;
        }
    } else if (playerSelection === 'scissors') {
        if(computerSelection === 'scissors') {
            console.log('Tie');
            return 'Its a tie!! You both picked ' + playerSelection;
        } else if (computerSelection === 'rock') {
            compScore++;
            console.log(playScore, compScore);
            return 'You lose! ' + computerSelection + ' beats your ' + playerSelection;
        } else if (computerSelection === 'paper') {
            playScore++;
            console.log(playScore, compScore);
            return 'You win! ' + playerSelection + ' beats the computers ' + computerSelection;
        }
    }
}

function game() {
    while(compScore <= 5 || playScore <= 5) {
        computerPlay();
        playerPick();
        playRound(playerPick(), computerPlay())
        
        if(compScore === 5) {
            return 'Computer Wins!!';
        } else if (playScore === 5) {
            return 'You win!!';
        }
    }
}