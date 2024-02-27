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

// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

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
        // console.log("You win")
        } else if (computerScore === 5){
            finalScore.textContent = "The computer wins with 5";
            // console.log("computer wins")
        } ;

};

 

