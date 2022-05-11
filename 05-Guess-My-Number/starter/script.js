'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess, !guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '⭐ Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent =  highScore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = '⛔ Too High!';
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '😭 You lost!';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = '⛔ Too Low!';
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '😭 You lost!';
        }
    }
});

document.querySelector('.again').addEventListener('click', function (){
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});