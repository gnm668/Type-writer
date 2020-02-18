class Demo {
    constructor(game, input) {
        this.game = game;
        this.words = [];
        this.input = input;

        this.read = this.read.bind(this);
        this.type = this.type.bind(this);
        this.typeLetter = this.typeLetter.bind(this);
        this.demoHandleWord = this.demoHandleWord.bind(this);
        this.userSkill = this.useSkill.bind(this);
        
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

        this.useSkill();

        // testing
        // console.log(this.words);
    };


    useSkill() {
        if (this.game.lives < 3 && this.game.skills.includes('health')) {
            let health = {word: 'health'}
            this.words.unshift(health);
        };

        if (this.game.words.length > 10 && this.game.skills.includes('bomb')) {
            let bomb = {word: 'bomb'};
            this.words.unshift(bomb);

            window.setTimeout(() => {
                this.words = this.game.words;
            }, 1000);
        };

        if (this.game.words.length > 5 && this.game.skills.includes('slow')) {
            let slow = {word: 'slow'};
            this.words.unshift(slow);
        };
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

        this.game.handleSkill(value);
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
        };
    };
};