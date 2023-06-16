'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Вірно!';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.question').textContent = 7;

// document.querySelector('.question').textContent = 11;

// document.querySelector('.number-input').value = 13;

// console.log(document.querySelector('.score').value = 13);

// const eventHadler = function () {
//     console.log(document.querySelector('.number-input').value);
// }

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

let score = 20;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введіть число';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Вірно';
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Занадто багато';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Занадто мало';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // обов'язково потрібно найти помилку в коді чому не коректно процює програма
    // при перевіці числа яке меньше за відгадуваєме число
  } else {
    document.querySelector('.guess-message').textContent = 'Game over';
    document.querySelector('.score').textContent = 0;
  }
});
