function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (userChoice === computerChoice) {
      result = 'It\'s a tie!';
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
      result = 'You win!';
  } else {
      result = 'You lose!';
  }

  document.getElementById('output').value = result;

  
  document.getElementById('user-choice-img').src = `${userChoice}.png`;

  
  document.getElementById('computer-choice-img').src = `${computerChoice}.png`;
}
