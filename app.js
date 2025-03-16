let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return options[ranIndex];
};

showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.style.backgroundColor = "#364652";
  msg.innerText = "Game Draw";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;

    // Correct logic for each choice
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false; // Rock beats Scissors
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false; // Paper beats Rock
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper" ? true : false; // Scissors beats Paper
    }

    showWinner(userWin);
  }
  console.log(userChoice, compChoice, userWin);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
