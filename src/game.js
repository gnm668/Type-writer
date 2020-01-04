class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        const word = new Word(this.ctx, this.canvas, "light", 20, 20);
    };
};