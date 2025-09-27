// FIRST MAKE AN MATH RANDOM IN GAME THAT ALWAYS TAKE RANDOM STRING ALWAYS THAN WE WILL 
// GET USER INPUT THAN IF USER WIN WE TYPE YOU WIN OR YOU LOOSE OR SAME IT'S TIE 
// THAN NOW WE CAN ADD POINT FOR THIS WE WILL DEPEND ON HOW MUCH USER WIN AND LOSSE SAME AS COMPUTER
// IT WILL 5 AND IN THE LAST AFTER 5 ROUND WE DISPLAY WHO WIN OR TiE

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
   let random = Math.floor((Math.random() * 3) + 1)
    if (random === 1) {
        return "rock"
    } else if (random === 2){
        return "scissor"
    } else {
        return "paper"
    }
}

function getHumanChoice(){
   const notice = prompt("choose rock ,scissor ,paper")
   return notice.trim().toLowerCase();
}
// getHumanChoice();

function playRound(humanChoice,computerChoice) {
    console.log("computer choose:",getComputerChoice());
    
    if (humanChoice === computerChoice){
        console.log("it's a tie!");
    }else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        console.log("you win!")
        humanScore++;
    } else {
        console.log("you lose!");
        computerScore++
    }
}
function playGame() {
    for (let round = 0; round < 5; round++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice,computerChoice);
    }
    if (humanScore > computerScore){
        alert("you are the winner!")
    } else if (humanScore < computerScore){
        alert("better luck next time!")
    } else {
        alert("its a tie , you know it's rare -_-")
    }
}
playGame();
