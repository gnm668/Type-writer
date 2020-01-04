class Word {
    constructor(ctx, canvas, word, x, y) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.word = word;
        this.x = x;
        this.y = y;
        this.dx = x;
        this.dy = y;
        
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(this.x, this.y, 100, 50);
    };

};