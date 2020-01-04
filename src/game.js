class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);

        this.word = new Word(this.ctx, this.canvas, "light", 20, 20);

        this.words = [];
    };

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.word.render();
        requestAnimationFrame(this.render);
    };

    startGame() {
        requestAnimationFrame(this.render);
    };
};