function getComputerChoice() {
    // function to randomly select a choice for the computer
    const playChoice = ["rock", "paper","scissors"]
    return playChoice[Math.floor(Math.random() * playChoice.length)]; 
};

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log(computerSelection + " " + playerSelection)
        return "This is a tie";
    } else if (playerSelection.toLowerCase() === "scissors" || computerSelection === "paper"){
        console.log(computerSelection + " " + playerSelection)
        return "Opps bad, you have lost";  
    } else {
        console.log(computerSelection + " " + playerSelection)
        return "Cheers, you have won";
    }
};

const playerSelection = "rock";
const computerSelection = getComputerChoice().toLowerCase();

console.log(playRound(playerSelection, computerSelection));
