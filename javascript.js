function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    if (choice == 1) return "rock"
    if (choice == 2) return "paper"
    return "scissors"
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    const humanChoiceLowerCase = humanChoice.toLowerCase()
    const currentHumanScore = humanScore
    const currentComputerScore = computerScore
    const resultDiv = document.querySelector(".result")
    const scoreDiv = document.querySelector(".score")
    if (computerScore == 5 || humanScore == 5) {
        humanScore = 0
        computerScore = 0
    }
    resultDiv.textContent = ''
    scoreDiv.textContent = ''
    switch (humanChoiceLowerCase) {
        case "rock":
            if (computerChoice == "scissors") humanScore += 1
            if (computerChoice == "paper") computerScore += 1
            break
        case "paper":
            if (computerChoice == "scissors") computerScore += 1
            if (computerChoice == "rock") humanScore += 1
            break
        case "scissors":
            if (computerChoice == "rock") computerScore += 1
            if (computerChoice == "paper") humanScore += 1
            break
    }
    if (currentComputerScore < computerScore) {
        resultDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
    } else if (currentHumanScore < humanScore) {
        resultDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
    } else {
        resultDiv.textContent = 'It\'s a tie.'
    }
    scoreDiv.textContent = `Current score: Computer ${computerScore}, You ${humanScore}`

    if (humanScore == 5) {
        resultDiv.textContent = "You win, congratulations!"
    } else if (computerScore == 5) {
        resultDiv.textContent = "Computer wins, try again."
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice())
    });
});