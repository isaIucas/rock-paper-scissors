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

    const div = document.querySelector(".comparison")
    div.textContent = `Player: ${playerSelectionFix}. Computer: ${computerSelection}`;

    const score =document.querySelector(".score")
    score.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}`;


    if (playerSelectionFix === computerSelection){
        const div2 = document.querySelector(".result")
        div2.textContent ="It's a tie!";
        return "tie"

    } else if (playerSelectionFix==="rock"&&computerSelection==="scissor"){
        const div2 = document.querySelector(".result")

        div2.textContent ="Player won!"
        return "player"
    } else if (playerSelectionFix==="rock"&&computerSelection==="paper"){
        const div2 = document.querySelector(".result")

        div2.textContent ="Computer won!"
        return "computer"

    }else if (playerSelectionFix==="paper"&&computerSelection==="rock"){
        const div2 = document.querySelector(".result")

        div2.textContent ="Player won!"
        return "player"

    } else if (playerSelectionFix==="paper"&&computerSelection==="scissor"){
        const div2 = document.querySelector(".result")

        div2.textContent ="Computer won!"
        return "computer"

    }else if (playerSelectionFix==="scissor"&&computerSelection==="paper"){
        const div2 = document.querySelector(".result")

        div2.textContent ="Player won!"
        return "player"

    } else if (playerSelectionFix==="scissor"&&computerSelection==="rock"){
        const div2 = document.querySelector(".result")

        div2.textContent ="Computer won!"
        return "computer"

    } else{
        div2.textContent ="idk"
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

     /*
     for (let i=1; i <= 5; i++){
                 */

    let playerSelection = prompt("game number ${i} \ntype rock, paper, or scissor");
    let result=playRound(playerSelection, computerPlay());
    if (result==="player"){
        playerScore++;
    }else if (result==="computer"){
    computerScore++;
    }
    console.log(`playerScore: ${playerScore} computerScore: ${computerScore} `)
        /*
     }
     */

     console.log("game over")
     if (playerScore > computerScore){
         console.log("player wins the game!");
     }else if (playerScore === computerScore){
        console.log("Nobody wins the game!");

     }else{
        console.log("computer wins the game!");
     }
}

function whoGetScore(string){
    if (string==="player"){
        playerScore++;
    }else if (string==="computer"){
        computerScore++;
    }
}

function whoWon(){
    const winner =document.querySelector(".winner");

    if (playerScore>=5){
        winner.textContent ="Player is the winner!"
    } else if (computerScore>=5){
        winner.textContent ="Computer is the winner!"
    }
}

const btn =document.querySelector("#rock");
const btn2 =document.querySelector("#paper");
const btn3 =document.querySelector("#scissor");
let playerScore=0;
let computerScore=0;
let result="yo";

const body = document.querySelector("body")


const score = document.createElement("div");
score.classList.add("score")
score.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}`;
body.insertBefore(score, btn);


btn.addEventListener("click",()=>{
    result=playRound("rock", computerPlay())
    whoGetScore(result);
    whoWon();
});

btn2.addEventListener("click",()=>{
    result=playRound("paper", computerPlay())
    whoGetScore(result);
    whoWon();

});

btn3.addEventListener("click",()=>{
    result=playRound("scissor", computerPlay())
    whoGetScore(result);
    whoWon();

});


const div = document.createElement("div");
div.classList.add("comparison")
div.textContent = `Player: none. Computer: none`;

const div2 = document.createElement("div");
div2.classList.add("result")
div2.textContent = ``;

const div3 = document.createElement("div");
div3.classList.add("winner")
div3.textContent = ``;

body.appendChild(div);
body.appendChild(div2);
body.appendChild(div3);
