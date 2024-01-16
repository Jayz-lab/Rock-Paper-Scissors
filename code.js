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
    generateComputerChoice()
    getResult()
}))