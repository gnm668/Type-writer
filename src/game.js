class Game {
    constructor(ctx, canvas, input) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.input = input;

        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);

        // this.word = new Word(this, this.ctx, this.canvas, "light", 690, 20);

        this.words = [];
        this.wordCount = 0;

        this.lives = 20;

        this.timer = 0;

        this.interval();

        this.spawnWord = this.spawnWord.bind(this);
        this.render = this.render.bind(this);
    };

    interval() {
        window.setInterval(() => {
            this.timer += 1;
            console.log(`${this.timer}`);
        }, 1000);
    };

    spawnWords() {
        
    };

    spawnWord() {
        let randomLoc = (Math.random() * 790);
        let word = new Word(this, this.ctx, this.canvas, 'randomWord', randomLoc, 0);
        this.words.push();
    };

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.word.render();
        requestAnimationFrame(this.render);
        this.input.focus();

        for (let i = 0; i < this.words.length; ++i) {

        };
    };

    startGame() {
        requestAnimationFrame(this.render);
    };
};