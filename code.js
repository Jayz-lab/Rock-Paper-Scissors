const computerPickOutput = document.getElementById('computer-choice')
const userPickOutput = document.getElementById('user-choice')
const resultOutput = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')//picks up 'all' button element sets
let userPick 
let computerPick 
let result

//captures user event clicks from possibleChoices
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userPick = e.target.id 
    userPickOutput.innerHTML = userPick//updates user's hoice in the interface
    generateComputerChoice() //generate comp choice function
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1//or possibleChoices.length

    if (randomNumber === 1) {
        computerPick = 'rock'
    }
    if (randomNumber === 2) {
        computerPick = 'scissors'
    }
    if (randomNumber === 3) {
        computerPick = 'paper'
    }
    
    computerPickOutput.innerHTML = computerPick
}