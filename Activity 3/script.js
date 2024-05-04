var tries = 0;
var randomNumber = Math.floor(Math.random() * 10) + 1;

function startGame() {
    tries = 0;
    document.getElementById("triesCount").textContent = tries;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guesslist").innerHTML = "";
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }

function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var message = document.getElementById("message");
  var triesCount = document.getElementById("triesCount");
  var guessList = document.getElementById("guesslist");

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "Invalid input: Please input a number between 1 and 10.";
  } else {
    tries++;
    triesCount.textContent = tries;

    var li = document.createElement("li");
    li.textContent = guess;
    guessList.appendChild(li);

    if (guess === randomNumber) {
      message.textContent = "Congratulations! You guessed the correct number in " + tries + " tries.";
      guessList.innerHTML = "";
    } else if (guess > randomNumber) {
      message.textContent = "Too high! Try again.";
    } else {
      message.textContent = "Too low! Try again.";
    }
}
}
   
function playAgain() {
    startGame();
}
window.onload = startGame;
