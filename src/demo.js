class Demo {
    constructor(game) {
        this.game = game;
        this.words = [];

        this.read = this.read.bind(this);
        this.type = this.type.bind(this);
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
        console.log(this.words);
    };

    type() {
        if (this.words.length) {
            let currentWord = this.words.shift();
            console.log(currentWord);
        };
    };

    // have play be called every 60 seconds
    // the set interval will be 6000/currentword.length in type

    play() {

    };
}