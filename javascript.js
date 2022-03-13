/*
function computerPlay that will randomly return either rock, paper, or scissors
*/
//store var from generate random number between 0 and 2
//use var on switch statement to determine computer choice and return that value
function computerPlay(){
    let number = Math.floor(Math.random()*3) 
    switch(number){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            return "error"
    }
}

/*
-function that plays a single round of rock paper scissors
-parameters of playerSelection and ComputerSelection with declare winner:"You Lose! Paper beats Rock"
-case insensitive
*/

//playerSelection to lower case in order to compare to computerSelection properly
//if else statement to include all possible scenarios


function playRound(playerSelection, computerSelection){
    let playerSelectionFix = playerSelection.toLowerCase()
    console.log(`Player: ${playerSelectionFix}. Computer: ${computerSelection}`)
    if (playerSelectionFix === computerSelection){
        console.log("It's a tie!")
        return "tie"

    } else if (playerSelectionFix==="rock"&&computerSelection==="scissor"){
        console.log("Player won!")
        return "player"
    } else if (playerSelectionFix==="rock"&&computerSelection==="paper"){
        console.log("Computer won!")
        return "computer"

    }else if (playerSelectionFix==="paper"&&computerSelection==="rock"){
        console.log("Player won!")
        return "player"

    } else if (playerSelectionFix==="paper"&&computerSelection==="scissor"){
        console.log("Computer won!")
        return "computer"

    }else if (playerSelectionFix==="scissor"&&computerSelection==="paper"){
        console.log("Player won!")
        return "player"

    } else if (playerSelectionFix==="scissor"&&computerSelection==="rock"){
        console.log("Computer won!")
        return "computer"

    } else{
        console.log("idk")
    }
}



/*
Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:
*/

//create a function called game()
//create two vars to track player and computer score
//create a loop that runs 5x
//prompt user to input
//invoke function playRound and store results

function game(){
     let playerScore=0;
     let computerScore=0;
     console.log(`playerScore: ${playerScore} computerScore: ${computerScore} `)

     for (let i=1; i <= 5; i++){
         let playerSelection = prompt(`game number ${i} \ntype rock, paper, or scissor`)
         let result=playRound(playerSelection, computerPlay())
         if (result==="player"){
             playerScore++;
         }else if (result==="computer"){
            computerScore++;
        }
        console.log(`playerScore: ${playerScore} computerScore: ${computerScore} `)
     }
     console.log("game over")
     if (playerScore > computerScore){
         console.log("player wins the game!")
     }else{
        console.log("computer wins the game!")

     }


}

game()