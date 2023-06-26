// Get the player choice
var paperButton = document.getElementById("paperButton");
var scissorsButton = document.getElementById("scissorsButton");
var stoneButton = document.getElementById("stoneButton");
var playerChoice;

paperButton.addEventListener("click", function() {
  playerChoice = "paper";
  compareChoices();
});

scissorsButton.addEventListener("click", function() {
  playerChoice = "scissors";
  compareChoices();
});

stoneButton.addEventListener("click", function() {
  playerChoice = "stone";
  compareChoices();
});

// Generate a random number between 0 and 2
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  // Use the random number to return a computer choice
  switch (randomNumber) {
    case 0:
      return 'paper';
    case 1:
      return 'scissors';
    case 2:
      return 'stone';
  }
}

// Initialize the counters
var winCount = 0;
var loseCount = 0;

// Get the score element
var scoreElement = document.getElementById("score");
// Get the result element
var resultElement = document.getElementById("result");

// Compare the computer and player choices
function compareChoices() {
  var computerChoice = getComputerChoice();

  resultElement.innerHTML = "";
  
  switch (true) {
    case computerChoice === playerChoice:
      resultElement.innerHTML = "It's a tie.";
      break;
    case (
      (computerChoice === "paper" && playerChoice === "stone") ||
      (computerChoice === "scissors" && playerChoice === "paper") ||
      (computerChoice === "stone" && playerChoice === "scissors")
    ):
      resultElement.innerHTML = "You lose, " + computerChoice + " beats " + playerChoice + ".";
      loseCount++; // Increment the lose count
      break;
    default:
      resultElement.innerHTML = "You win, " + playerChoice + " beats " + computerChoice + ".";
      winCount++; // Increment the win count
      break;
  }
  // Update the score display
  scoreElement.innerHTML = "Wins: " + winCount + " | Losses: " + loseCount;

  // Check the win and loss counts
  winLose();
}

// Count the number of wins and losses
function winLose() {
  if (winCount === 3) {
    alert("WINNER!");
  } else if (loseCount === 3) {
    alert("LOSER!");
  }
}