'use strict';
console.log(document.querySelector('.message').textContent);

//document.querySelector('.message').textContent = 'Correct Number !';

//document.querySelector('.number').textContent = 13;

//document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
let highscore = 0;
let score = 20;
let secretnumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //input is not a number
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number';
  }

  //correct number
  else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '✅ Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //number is too high
  /*else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //number is too low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
