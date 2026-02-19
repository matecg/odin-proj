const OPTIONS = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const idx = Math.floor(Math.random() * 3);
    return OPTIONS[idx];
}

function getHumanChoice() {
    const choice = prompt("What's your choice? (rock/paper/scissors)", getComputerChoice());
    return choice.toLowerCase();
}
