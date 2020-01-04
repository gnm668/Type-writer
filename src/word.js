class Word {
    constructor(ctx, canvas, word, x, y) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.word = word;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 2.5;
    };
    
    draw() {
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(this.x, this.y, 100, 50);
    };

    render() {
        this.update();
        this.draw();
    };

    update() {
        this.move();
    };

    move() {
        this.y += this.dy;
    };

};