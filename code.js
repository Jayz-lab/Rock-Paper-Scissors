//interact with the Document Object Model (DOM) to retrieve the HTML element with the ID
const computerPickOutput = document.getElementById('computer-choice')
const userPickOutput = document.getElementById('user-choice')
const resultOutput = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')//picks up 'all' button element sets
let userPick 
let computerPick 
let result

//Event handling - captures user event clicks from possibleChoices
//.forEach iterates over each element/button in the array as a perimeter
/*.addEventListener('click', (e) => { ... })This code adds a click event listener to each element/button in possibleChoices.
-> When a user clicks on one of these elements, the provided arrow function is executed.*/
/*(e) => { ... } an arrow function serving as the event handler. 
The function is executed when the specified event ('click' in this instance) occurs*/
//The 'e' parameter represents the event object, which contains information about the event, such as the target element and other details.
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userPick = e.target.id // This extracts the id property of the clicked element/button and assigns it to the variable userPick
    userPickOutput.innerHTML = userPick//updates user's choice in the interface
    generateComputerChoice() //generate comp choice function
    getResult() //return results function
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

function getResult() {
    if (computerPick === userPick) {
        result = 'Its a draw!'
    }
    if (computerPick === 'rock' && userPick === 'paper') {
        result = 'you win!'
    }
    if (computerPick === 'rock' && userPick === 'scissors') {
        result = 'you lose!'
    }
    if (computerPick === 'paper' && userPick === 'rock') {
        result = 'you lose!'
    }
    if (computerPick === 'paper' && userPick === 'scissors') {
        result = 'you win!'
    }
    if (computerPick === 'scissors' && userPick === 'rock') {
        result = 'you win!'
    }
    if (computerPick === 'scissors' && userPick === 'paper') {
        result = 'you lose!'
    }

    resultOutput.innerHTML = result

}

