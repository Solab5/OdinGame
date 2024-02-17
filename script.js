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

function playGame(){
    let declareWinner = {};
    let results = [];
    let round = 5;
    while (round >= 1){
        let playerSelection = prompt("What's your choice");
        let computerSelection = getComputerChoice().toLowerCase();
        if (playRound(playerSelection, computerSelection) === "This is a tie"){
            results.push('t')
        } else if (playRound(playerSelection, computerSelection) === "Cheers, you have won") {
            results.push('w')
        } else {
            results.push('l')
        }
        round = round - 1;
        }
    console.log(results)  
    for (const element of results) {
        if (declareWinner[element]){
            declareWinner[element] += 1;
        }else {
            declareWinner[element] = 1;
        }
    }
    if (declareWinner.w > declareWinner.l) {
        console.log("You have won");
    } else if (declareWinner.w < declareWinner.l){
        console.log("You have lost");
    } else {
        console.log("Its a draw");
    }
    }
playGame();