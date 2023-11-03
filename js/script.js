let userScore = 0;
let computerScore = 0;
let gameOver = false;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function updateScore() {
    document.getElementById('userScore').textContent = `Користувач: ${userScore}`;
    document.getElementById('computerScore').textContent = `Комп'ютер: ${computerScore}`;
}

function checkWinner() {
    if (userScore >= 3) {
        alert('Ви виграли!');
        gameOver = true;
    } else if (computerScore >= 3) {
        alert('Комп\'ютер виграв. Спробуйте ще раз.');
        gameOver = true;
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    if (!gameOver) {
        const userNumber = generateRandomNumber();
        const computerNumber = generateRandomNumber();

        document.getElementById('userNumber').textContent = `Число користувача: ${userNumber}`;
        document.getElementById('computerNumber').textContent = `Число комп'ютера: ${computerNumber}`;

        if (userNumber > computerNumber) {
            userScore++;
        } else if (userNumber < computerNumber) {
            computerScore++;
        }

        updateScore();
        checkWinner();
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    userScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScore();
});
