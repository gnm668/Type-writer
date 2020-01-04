class Word {
    constructor(game, ctx, canvas, word, x, y) {
        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;
        this.word = word;
        this.width = this.word.length * 12;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 1;
    
        this.checkEdge = this.checkEdge.bind(this);
    };
    
    draw() {
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(this.x, this.y, this.width + 10, 30);
        this.ctx.font = '20px Arial';
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillText(`${this.word}`,this.x + 10, this.y + 20, 100);
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
            console.log(this.game.lives);
        };
    };

};