const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = 'Draw!'
    }
    if (computerChoice === 'rock' && playerChoice === "paper") {
        result = 'Win!'
    }
    if (computerChoice === 'rock' && playerChoice === "scissors") {
        result = 'Loss!'
    }
    if (computerChoice === 'paper' && playerChoice === "rock") {
        result = 'Loss!'
    }
    if (computerChoice === 'scissors' && playerChoice === "rock") {
        result = 'Win!'
    }
    if (computerChoice === 'scissors' && playerChoice === "paper") {
        result = 'Loss!'
    }
    resultDisplay.innerHTML = result
}