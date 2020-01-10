document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const input = document.getElementById('input');
    const startScreen = document.querySelector('.start-screen');

    const bottomBorder = document.querySelector('.checker');
    bottomBorder.style.backgroundImage = "url('assets/images/checker.png')";

    const mario = new FontFace('mario', 'url(assets/fonts/Krungthep.ttf)')
    const marioGalaxy = new FontFace('marioGalaxy', 'url(assets/fonts/SuperMario256.ttf)');

    mario.load()
        .then(loadedFace => {
            document.fonts.add(loadedFace);
        });

    marioGalaxy.load()
        .then(loadedFace => {
            document.fonts.add(loadedFace);
        });

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