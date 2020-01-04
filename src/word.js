class Word {
    constructor(game, ctx, canvas, word, x, y) {
        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;
        this.word = word;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 5;

        this.checkEdge = this.checkEdge.bind(this);
    };
    
    draw() {
        this.ctx.font = '20px Arial';
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillText(`${this.word}`,this.x, this.y, 100);
    };

    render() {
        this.draw();
        this.update();
    };

    update() {
        this.checkEdge();
        this.move();
    };

    move() {
        this.y += this.dy;
    };

    checkEdge() {
        if (this.y === 615) {
            this.game.lives -= 1;
        };
    };

};