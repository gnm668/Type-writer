document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const input = document.getElementById('input');

    const typeWriter = new Game(ctx, canvas, input);
    typeWriter.startGame();
});