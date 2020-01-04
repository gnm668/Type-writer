class Game {
    constructor(ctx, canvas, input) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.input = input;

        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);

        this.word = new Word(this, this.ctx, this.canvas, "light", 690, 20);

        this.words = [];

        this.lives = 20;
    };

    spawnWords() {
        
    };

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.word.render();
        requestAnimationFrame(this.render);
        this.input.focus();
    };

    startGame() {
        requestAnimationFrame(this.render);
    };
};