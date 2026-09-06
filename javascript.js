function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    if (choice == 1) return "rock"
    if (choice == 2) return "paper"
    return "scissors"
}

function getHumanChoice() {
    const choice = prompt("Please enter your move (rock, paper or scissors):")
    return choice
}



function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        const humanChoiceLowerCase = humanChoice.toLowerCase()
        const currentHumanScore = humanScore
        const currentComputerScore = computerScore
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
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
        } else if (currentHumanScore < humanScore) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
        } else {
            console.log("It's a tie.")
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) console.log("You win!")
    else if (humanScore < computerScore) console.log("Computer wins!")
    else console.log("It's a tie!")
}

playGame()