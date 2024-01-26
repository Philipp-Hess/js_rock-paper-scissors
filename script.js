function makeChoice(userChoice) {
  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  displayResult(userChoice, computerChoice, result);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Es ist ein Unentschieden!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Du gewinnst!";
  } else {
    return "Du verlierst!";
  }
}

function displayResult(userChoice, computerChoice, result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      Du hast ${userChoice} gewählt.<br>
      Der Computer hat ${computerChoice} gewählt.<br>
      ${result}
  `;
}
