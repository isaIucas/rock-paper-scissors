
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

function playRound(playerSelection, computerSelection){
    let playerSelectionFix = playerSelection.toLowerCase()

    switch(playerSelection){
        case "rock":
            content2.src = "./img/prock.png"
            break;
        case "paper":
            content2.src = "./img/ppaper.png"
            break;
        case "scissor":
            content2.src = "./img/pscissor.png"
            break;
        default:
            content2.src = "./img/blank.png"
    }

    switch(computerSelection){
        case "rock":
            content6.src = "./img/crock.png"
            break;
        case "paper":
            content6.src = "./img/cpaper.png"
            break;
        case "scissor":
            content6.src = "./img/cscissor.png"
            break;
        default:
            content6.src = "./img/blank.png"
    }


    if (playerSelectionFix === computerSelection){
        const div5 = document.querySelector(".round")
        content2.style.border = "2px solid black";
        content6.style.border = "2px solid black";
        div5.textContent ="It's a tie!";
        return "tie"

    } else if (playerSelectionFix==="rock"&&computerSelection==="scissor"){
        const div5 = document.querySelector(".round")
        content2.style.border = "2px solid green";
        content6.style.border = "2px solid red";

        div5.textContent ="Player wins!"
        return "player"
    } else if (playerSelectionFix==="rock"&&computerSelection==="paper"){
        const div5 = document.querySelector(".round")
        content6.style.border = "2px solid green";
        content2.style.border = "2px solid red";
        div5.textContent ="Computer wins!"
        return "computer"

    }else if (playerSelectionFix==="paper"&&computerSelection==="rock"){
        const div5 = document.querySelector(".round")
        content2.style.border = "2px solid green";
        content6.style.border = "2px solid red";
        div5.textContent ="Player wins!"
        return "player"

    } else if (playerSelectionFix==="paper"&&computerSelection==="scissor"){
        const div5 = document.querySelector(".round")
        content6.style.border = "2px solid green";
        content2.style.border = "2px solid red";
        div5.textContent ="Computer wins!"
        return "computer"

    }else if (playerSelectionFix==="scissor"&&computerSelection==="paper"){
        const div5 = document.querySelector(".round")
        content2.style.border = "2px solid green";
        content6.style.border = "2px solid red";
        div5.textContent ="Player wins!"
        return "player"

    } else if (playerSelectionFix==="scissor"&&computerSelection==="rock"){
        const div5 = document.querySelector(".round")
        content6.style.border = "2px solid green";
        content2.style.border = "2px solid red";
        div5.textContent ="Computer wins!"
        return "computer"

    } else{
        div5.textContent ="idk"
    }
}

function addScore(string){
    if (string==="player"){
        playerScore++;
    }else if (string==="computer"){
        computerScore++;
    }

    const score1 =document.querySelector(".score1")
    score1.textContent = `${playerScore}`;

    const score2 =document.querySelector(".score2")
    score2.textContent = `${computerScore}`;
    
}

function checkWinner(){
    const winner =document.querySelector(".winner");

    if (playerScore>=5){
        winner.textContent ="Player is the winner!"
        return true
    } else if (computerScore>=5){
        winner.textContent ="Computer is the winner!"
        return true
    }
    return false;
}

function reset(){
    content2.src = "./img/blank.png"            
    content6.src = "./img/blank.png"
    content2.style.border="2px solid black"       
    content6.style.border="2px solid black"       
    playerScore=0
    computerScore =0
    content3.textContent = `${computerScore}`;
    content7.textContent = `${computerScore}`;
    div5.textContent = ``;
    div7.textContent = ``;
}

const btn =document.querySelector("#rock");
const btn2 =document.querySelector("#paper");
const btn3 =document.querySelector("#scissor");
let playerScore=0;
let computerScore=0;
let round="";

const body = document.querySelector("body");
const buttons = document.querySelector(".buttons");




btn.addEventListener("click",()=>{
    if (!checkWinner()){
        round=playRound("rock", computerPlay())
        addScore(round);
        checkWinner()
    }
});

btn2.addEventListener("click",()=>{
    if (!checkWinner()){
        round=playRound("paper", computerPlay())
        addScore(round);
        checkWinner()
    }
});

btn3.addEventListener("click",()=>{
    if (!checkWinner()){
        round=playRound("scissor", computerPlay())
        addScore(round);
        checkWinner()
    }

});
const div1 = document.createElement("h1");
div1.style.fontFamily = "Arial"
div1.textContent = "ROCK PAPER SCISSOR";
body.insertBefore(div1, buttons);


const div2 = document.createElement("div");
div2.textContent = "Pick your choice:";
body.insertBefore(div2, buttons);

const div4 = document.createElement("div");
div4.style.cssText = "display:flex; gap: 50px;"
body.appendChild(div4);


    const innerDiv1 = document.createElement("div");
    innerDiv1.style.cssText = "display:flex; flex-direction:column; align-items:center"
    div4.appendChild(innerDiv1);

        const content1 = document.createElement("h3");
        content1.textContent="PLAYER";
        innerDiv1.appendChild(content1);

        const content2 = document.createElement("img");
        content2.src = "./img/blank.png"            
        content2.style.cssText="transform: rotate(90deg);border: 2px solid black; border-radius: 25px; height: 160px; width:160px";
        innerDiv1.appendChild(content2);

        const content3 = document.createElement("h1");
        content3.classList.add("score1")
        content3.textContent = `${playerScore}`;
        innerDiv1.appendChild(content3);


    const innerDiv2 = document.createElement("div");
    innerDiv2.style.cssText = "display:flex; flex-direction:column; justify-content:center; align-items:center;"
    div4.appendChild(innerDiv2);

        const content4 = document.createElement("div");
        content4.textContent="VS";
        innerDiv2.appendChild(content4);


    const innerDiv3 = document.createElement("div");
    innerDiv3.style.cssText = "display:flex; flex-direction:column;align-items:center;"
    div4.appendChild(innerDiv3);

        const content5 = document.createElement("h3");
        content5.textContent="COMPUTER";
        innerDiv3.appendChild(content5);

        const content6 = document.createElement("img");
        content6.src="./img/blank.png";
        content6.style.cssText="transform: rotate(-90deg);border: 2px solid black; border-radius: 25px; height: 160px; width:160px";
        innerDiv3.appendChild(content6);

        const content7 = document.createElement("h1");
        content7.classList.add("score2")
        content7.textContent = `${computerScore}`;
        innerDiv3.appendChild(content7);



const div5 = document.createElement("div");
div5.classList.add("round")
div5.textContent = ``;

const div7 = document.createElement("h1");
div7.classList.add("winner")
div7.textContent = ``;

const div8 = document.createElement("button");
div8.textContent = "Start Over";

div8.addEventListener("click",()=>{
    reset();
});

body.appendChild(div5);
body.appendChild(div7);
body.appendChild(div8);

