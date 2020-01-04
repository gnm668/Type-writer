class Game {
    constructor(ctx, canvas, input) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.input = input;

        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);
        this.gameOver = false;

        this.dictionary = new Dictionary();
        this.words = [];
        this.wordScore = 100;
        this.wordSpeed = 0.25;
        this.randomizer = 150;

        this.lives = 10;
        this.score = 0;

        this.timer = 0;

        this.interval = this.interval.bind(this);
        this.handleWord = this.handleWord.bind(this);
        this.spawnWord = this.spawnWord.bind(this);
        this.spawnWords = this.spawnWords.bind(this);
        this.render = this.render.bind(this);
        this.gameInfo = this.gameInfo.bind(this);
        this.updateGameInfo = this.updateGameInfo.bind(this);

        this.gameInfo();
    };

    gameInfo() {
        const score = document.querySelector('.score');
        const skills = document.querySelector('.skills');
        const lives = document.querySelector('.lives');

        const scoreInfo = document.createElement('div');
        const skillsInfo = document.createElement('div');
        const livesInfo = document.createElement('div');

        scoreInfo.classList.add('score-info');
        livesInfo.classList.add('lives-info');

        scoreInfo.innerText = this.score;
        // skill info
        livesInfo.innerText = this.lives;

        score.appendChild(scoreInfo);
        lives.appendChild(livesInfo);
    };

    updateGameInfo() {
        const scoreInfo = document.querySelector('.score-info');
        const livesInfo = document.querySelector('.lives-info');

        scoreInfo.innerText = this.score;
        livesInfo.innerText = this.lives;

        this.checkGameOver();
    };

    interval() {
        window.setInterval(() => {
            this.timer += 1;
            // console.log(`${this.timer}`);

            this.difficultyIncrease();
            this.scoreIncrease();
        }, 1000);
    };

    difficultyIncrease() {
        if (this.randomizer > 5 && this.timer % 20 === 0) {
            this.randomizer -= 5;
            // console.log(this.randomizer);
        };

        if (this.timer % 60 === 0) {
            this.wordSpeed += 0.25;
        };
    };

    scoreIncrease() {
        if (this.timer % 20 === 0 ) {
            this.wordScore += 100;
        };
    };

    spawnWords() {
        if (Math.floor(Math.random() * this.randomizer + 10) === Math.floor(Math.random() * this.randomizer +10)) {
            this.spawnWord();
        };
    };

    spawnWord() {
        let randomLoc = (Math.random() * 690);
        let word = new Word(this, this.ctx, this.canvas, this.dictionary.randomWord(), randomLoc, 0, this.wordScore, this.wordSpeed);
        this.words.push(word);
    };

    handleWord(e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
            let value = this.input.value.trim();
            for (let word in this.words) {
                if (value === this.words[word].word) {
                    this.score += this.words[word].score;
                    this.words.splice(word, 1);
                    console.log(this.score);
                    // console.log(this.words);
                    break;
                };
            };
            this.input.value = "";
        };
    };

    render() {
        if (this.gameOver === true) {
            return;
        };

        this.updateGameInfo();

        this.spawnWords();

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.req = requestAnimationFrame(this.render);

        this.input.focus();
        this.input.addEventListener('keydown', this.handleWord);

        for (let i = 0; i < this.words.length; ++i) {
            this.words[i].render();
        };
    };

    startGame() {
        this.interval();
        requestAnimationFrame(this.render);
    };

    checkGameOver() {
        if (this.lives < 1) {
            this.gameOver = true;

            const gameOver = document.querySelector('.game-over')
            gameOver.classList.add('effect');

            const score = document.createElement('div');
            score.innerText = this.score;
            gameOver.appendChild(score);

            addEventListener('keydown', () => {
                window.location.reload(false);
            });

        };
    };
};