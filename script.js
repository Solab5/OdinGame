function getComputerChoice() {
    // function to randomly select a choice for the computer
    const playChoice = ["rock", "paper","scissors"]
    return playChoice[Math.floor(Math.random() * playChoice.length)]; 
};

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection) {
        return "This is a tie";
    } else if (playerSelection.toLowerCase() === "scissors" || computerSelection === "paper"){
        return "Opps bad, you have lost";  
    } else {
        return "Cheers, you have won";
    }
};


const rock = document.querySelector('#rock-button');
const paper = document.querySelector("#paper-button");
const scissor = document.querySelector("#scissor-button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const finalScore = document.querySelector(".finalScore");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", function(){
    const computerSelection = getComputerChoice();
    const roundResult = playRound("rock",computerSelection);
    result.textContent = roundResult;
    updateScore(roundResult);
})

paper.addEventListener("click", function(){
    const computerSelection = getComputerChoice();
    const roundResult = playRound("paper",computerSelection);
    result.textContent = roundResult;
    updateScore(roundResult);
})

scissor.addEventListener("click", function(){
    const computerSelection = getComputerChoice();
    const roundResult = playRound("scissors",computerSelection);
    result.textContent = roundResult;
    updateScore(roundResult);
})

function updateScore(result){
    if (result === "Cheers, you have won") {
        playerScore++;
    } else if (result === "Opps bad, you have lost") {
        computerScore++;
    };

    score.textContent = `player : ${playerScore} - computer: ${computerScore}`;

    if (playerScore === 5) {
        finalScore.textContent = "Finally you win with 5";
        } else if (computerScore === 5){
            finalScore.textContent = "The computer wins with 5";
        } ;

};

 

