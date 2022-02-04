'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (messege) {
    document.querySelector('.messege').textContent = messege
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        displayMessage(' no number!!!!')
    } else if (score > 0) {
        if (guess === secretNumber) {
            displayMessage('correct number @@ !!')
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            if (score > highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = score
            }
        } else if (guess !== secretNumber) {
            if (guess > secretNumber) {
                displayMessage(' too high @@ !!')
                score--
                document.querySelector('.score').textContent = score
            }
            if (guess < secretNumber) {
                displayMessage('too low @@ !!')
                score--
                document.querySelector('.score').textContent = score
            }
        }
    } else {
        displayMessage('you  lost   ..!.. ')
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    document.querySelector('.score').textContent = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('body').style.backgroundColor = '#222'
    displayMessage('start guessting ...')
    document.querySelector('.number').textContent = '?'
})
