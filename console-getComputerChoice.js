//Computer randomly chooses
function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // Use the random number to return a computer choice
    switch (randomNumber) {
      case 0:
        return 'Stone';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
  }
  
  // Call the function and log the output to the console
  const computerChoice = getComputerChoice();

console.log(getComputerChoice())