const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
};

const playGame = (playerChoice) => {
  const computerChoice = getComputerChoice();
  if (computerChoice === playerChoice) {
    document.getElementById("resultDisplay").innerHTML = " ITS A TIE ";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("resultDisplay").innerHTML = " YOU WIN ";
  } else {
    document.getElementById("resultDisplay").innerHTML = " YOU LOSE ";
  }
};
