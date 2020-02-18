class Demo {
    constructor(game, input) {
        this.game = game;
        this.words = [];
        this.input = input;

        this.read = this.read.bind(this);
        this.type = this.type.bind(this);
        this.typeLetter = this.typeLetter.bind(this);
        this.demoHandleWord = this.demoHandleWord.bind(this);
        
        console.log('YAY');
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

        // testing
        // console.log(this.words);
    };

    demoHandleWord() {
        let value = this.input.value.trim();
        this.input.value = '';

        for (let word in this.game.words) {
            if (value === this.game.words[word].word) {
                this.game.score += this.game.words[word].score;

                this.game.addSkill(word);

                this.game.words.splice(word, 1);
                break;
            };
        };
    };

    typeLetter(currentWord, i, interval) {
        if (i < currentWord.length) {
            let curr = currentWord.substring(0, i + 1);
            this.input.value = curr;
            ++i;
            window.setTimeout(() => { this.typeLetter(currentWord, i) }, interval);
        };

        window.setTimeout(this.demoHandleWord, 500);
    };

    type() {
        if (this.words.length) {
            let currentWord = this.words.shift().word;
            let interval = 1000 / currentWord.length;


            this.typeLetter(currentWord, 0, interval);


            

            // for (let i = 0; i < currentWord.length; ++i) {
            //     let currentChar = currentWord[0];
            //     currentWord = currentWord.substring(1, currentWord.length);
            //     setTimeout(() => {
            //         debugger;
            //         this.input.value += currentChar;
            //     }, interval);
            // };
            
            // testing
            // console.log(currentWord);
        };
    };
};