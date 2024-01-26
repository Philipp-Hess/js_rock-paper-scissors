function makeChoice(userChoice) {
  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  displayResult(userChoice, computerChoice, result);
}

function getComputerChoice() {
  const choices = ["Stein", "Papier", "Schere"];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Es ist ein Unentschieden!";
  } else if (
    (userChoice === "Stein" && computerChoice === "Schere") ||
    (userChoice === "Papier" && computerChoice === "Stein") ||
    (userChoice === "Schere" && computerChoice === "Papier")
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
