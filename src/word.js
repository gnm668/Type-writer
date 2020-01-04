class Word {
    constructor(game, ctx, canvas, word, x, y, score, wordSpeed) {
        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;
        this.word = word;
        this.score = score;
        this.width = 0;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = wordSpeed;
        
        this.skill = null;

        this.checkEdge = this.checkEdge.bind(this);
        this.assignSkill = this.assignSkill.bind(this);
    
        this.widthCalc();
        this.assignSkill();
        
    };

    assignSkill() {
    
    };

    widthCalc() {
        const short = ['f', 'i', 'j', 'l', 't'];
        const medium = ['r'];
        const long = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'k', 'm', 'n', 'o', 'p', 'q', 's', 'u', 'v', 'w', 'x', 'y', 'z'];

        for (let i = 0; i < this.word.length; ++i ) {
            if (short.includes(this.word[i])) {
                this.width += 6;
            } else if (long.includes(this.word[i])) {
                this.width += 12;  
            } else if (medium.includes(this.word[i])) {
                this.width += 9;
            };
        };
    };
    
    draw() {

        if (this.width > 100) {
            this.width = 110;
        };

        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(this.x, this.y, this.width, 30);
        this.ctx.font = '16px Arial';
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillText(`${this.word}`,this.x + 5, this.y + 20, 100);

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
        if (this.y === 630) {
            this.game.lives -= 1;
            console.log(this.game.lives);

            for (let word in this.game.words) {
                if (this.word === this.game.words[word].word) {
                    this.game.words.splice(word, 1);
                };
            };
        };
    };

};