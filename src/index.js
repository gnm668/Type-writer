document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const input = document.getElementById('input');
    const startScreen = document.querySelector('.start-screen');

    const typeWriter = new Game(ctx, canvas, input);

    startScreen.addEventListener('click', () => {
        startScreen.classList.add('effect');
        typeWriter.startGame();
    });
});