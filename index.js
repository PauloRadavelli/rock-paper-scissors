const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userDisplayScore = document.querySelector("#user-score");
const computerDisplayScore = document.querySelector("#computer-score")
const userDisplayChoice = document.querySelector("#user-choice")
const computerDisplayChoice = document.querySelector("#computer-choice")
const modal = document.querySelector("#myModal");
const modalContent = document.querySelector(".modal-content")
const options = ["rock","paper","scissors"];
let computerScore = 0;
let userScore = 0;
let userChoice;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return options[getRandomInt(3)]
}

function onRockClick() {
    let computerChoice = getComputerChoice();
    setComputerIcon(computerChoice);
    userDisplayChoice.src = "./images/rock.png";    
    userChoice = "rock";
    if(computerChoice == "paper"){
        computerScore++;
    }
    if(computerChoice == "scissors"){
        userScore++;
    }
    userDisplayScore.textContent = "Your score: "+userScore;
    computerDisplayScore.textContent = "Computer score: "+computerScore
    replay(userScore,computerScore);
}

function onPaperClick() {
    let computerChoice = getComputerChoice();
    userDisplayChoice.src = "./images/paper.png";
    setComputerIcon(computerChoice);
    userChoice = "paper";
    if(computerChoice == "scissors"){
        computerScore++;
    }
    if(computerChoice == "rock"){
        userScore++;
    }
    userDisplayScore.textContent = "Your score: "+userScore;
    computerDisplayScore.textContent = "Computer score: "+computerScore
    replay(userScore,computerScore);

}

function onScissorsClick(){
    let computerChoice = getComputerChoice();
    userDisplayChoice.src = "./images/scissors.png";
    setComputerIcon(computerChoice);
    userChoice = "scissors";
    if(computerChoice == "rock"){
        computerScore++
    }
    if(computerChoice == "paper"){
        userScore++
    }
    userDisplayScore.textContent = "Your score: "+userScore;
    computerDisplayScore.textContent = "Computer score: "+computerScore
    replay(userScore,computerScore);
}

function setComputerIcon(computerChoice){
    switch(computerChoice){
        case "scissors":
            computerDisplayChoice.src= "./images/scissors.png"
            break
        case "rock":
            computerDisplayChoice.src= "./images/rock.png"
            break
        case "paper":
            computerDisplayChoice.src= "./images/paper.png"
            break;
    }
}

function replay(playerPoints, computerPoints){
    if(playerPoints == 5){
        modal.style.display = "block";
        const victoryText = document.createElement("p");
        victoryText.textContent = "Congratulations you won!"
        modalContent.appendChild(victoryText);
        userScore = 0;
        computerScore = 0;
    }
    if(computerPoints == 5){
        modal.style.display = "block";
        modal.style.display = "block";
        const defeatText = document.createElement("p");
        defeatText.textContent = "I'm sorry, you lost!"
        modalContent.appendChild(defeatText);
        userScore = 0;
        computerScore = 0;
    }
}

function closeModal(){
    modal.style.display = "none";
    location.reload()

}