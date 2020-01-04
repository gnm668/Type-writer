let typeWriter = null;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const input = document.getElementById('input');
    const startScreen = document.querySelector('.start-screen');
    const gameOver = document.querySelector('.game-over');

    startScreen.addEventListener('click', () => {
        typeWriter = new Game(ctx, canvas, input);
        startScreen.classList.add('effect');
        typeWriter.startGame();
    });

    gameOver.addEventListener('click', () => {
        window.location.reload(false);
    });
});