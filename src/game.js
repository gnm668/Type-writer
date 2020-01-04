class Game {
    constructor(ctx, canvas, input) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.input = input;

        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);

        this.dictionary = new Dictionary();
        this.words = [];
        this.wordCount = 1;
        this.randomizer = 145;

        this.lives = 20;

        this.timer = 0;

        this.interval();

        this.spawnWord = this.spawnWord.bind(this);
        this.spawnWords = this.spawnWords.bind(this);
        this.render = this.render.bind(this);
    };

    interval() {
        window.setInterval(() => {
            this.timer += 1;
            console.log(`${this.timer}`);

            if (this.randomizer > 5 && this.timer % 20 === 0) {
                this.randomizer -= 5;
                console.log(this.randomizer);
            };

        }, 1000);
    };

    spawnWords() {
        for (let i = 0; i < this.wordCount; ++i) {
            if (Math.floor(Math.random() * this.randomizer + 10) === Math.floor(Math.random() * this.randomizer +10)) {
                this.spawnWord();
            };
        };
    };

    spawnWord() {
        let randomLoc = (Math.random() * 690);
        let word = new Word(this, this.ctx, this.canvas, this.dictionary.randomWord(), randomLoc, 0);
        this.words.push(word);
    };

    render() {
        this.spawnWords();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(this.render);
        this.input.focus();

        for (let i = 0; i < this.words.length; ++i) {
            this.words[i].render();
        };
    };

    startGame() {
        requestAnimationFrame(this.render);
    };
};