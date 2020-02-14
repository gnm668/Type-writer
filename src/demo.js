class Demo {
    constructor(game) {
        this.game = game;
        this.words = [];

        this.read = this.read.bind(this);
    };

    read() {
        for (let i = 0; i < this.game.words.length; ++i) {
            let word = this.game.words[i];

            if (this.words.includes(word)) {
                continue
            } else {
                this.words.push(word);
            };
        };
        
    };

    type(){

    };

}