document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const input = document.getElementById('input');
    const startScreen = document.querySelector('.start-screen');

    const startGame = e => {
        if (e.keyCode === 32) {
            const typeWriter = new Game(ctx, canvas, input);
            startScreen.classList.add('effect');
            typeWriter.startGame();

            document.removeEventListener('keyup', startGame);
        };
    };

    document.addEventListener('keyup', startGame);

});