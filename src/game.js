class Game {
    constructor(ctx, canvas, input) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.input = input;

        // COME BACK TO THIS DEMO
        this.demo = null;
        // /////////////////
        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);
        this.gameOver = false;

        this.dictionary = new Dictionary();
        this.words = [];
        this.wordScore = 100;
        this.wordSpeed = 0.25;
        this.randomizer = 135;

        this.lives = 10;
        this.score = 0;
        this.skills = [];

        this.timer = 0;

        this.interval = this.interval.bind(this);

        this.handleSkill = this.handleSkill.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.maxSkill = this.maxSkill.bind(this);

        this.handleBomb = this.handleBomb.bind(this);
        this.handleHealth = this.handleHealth.bind(this);
        this.handleSlow = this.handleSlow.bind(this);
        
        this.handleWord = this.handleWord.bind(this);
        this.spawnWord = this.spawnWord.bind(this);
        this.spawnWords = this.spawnWords.bind(this);

        
        this.gameInfo = this.gameInfo.bind(this);
        this.updateGameInfo = this.updateGameInfo.bind(this);
        this.startDemo = this.startDemo.bind(this);
        
        this.render = this.render.bind(this);

        this.gameInfo();

    };

    gameInfo() {
        const score = document.querySelector('.score');
        const skills = document.querySelector('.skills');
        const lives = document.querySelector('.lives');

        const scoreInfo = document.createElement('div');
        const skillsInfo = document.createElement('div');
        const livesInfo = document.createElement('div');

        scoreInfo.classList.add('score-info');
        livesInfo.classList.add('lives-info');

        scoreInfo.innerText = this.score;
        // skill info
        livesInfo.innerText = this.lives;

        score.appendChild(scoreInfo);
        lives.appendChild(livesInfo);
    };

    updateGameInfo() {
        const scoreInfo = document.querySelector('.score-info');
        const livesInfo = document.querySelector('.lives-info');

        scoreInfo.innerText = this.score;
        livesInfo.innerText = this.lives;

        this.checkGameOver();
    };

    interval() {
        window.setInterval(() => {
            this.timer += 1;

            this.difficultyIncrease();
            this.scoreIncrease();
        }, 1000);
    };

    difficultyIncrease() {
        if (this.randomizer > 5 && this.timer % 20 === 0) {
            this.randomizer -= 5;
        };

        if (this.timer % 60 === 0) {
            this.wordSpeed += 0.25;
        };
    };

    scoreIncrease() {
        if (this.timer % 20 === 0 ) {
            this.wordScore += 100;
        };
    };

    spawnWords() {
        if (this.words.length === 0 || 
            Math.floor(Math.random() * this.randomizer + 10) === Math.floor(Math.random() * this.randomizer +10)
            ) {
            this.spawnWord();
        };
    };

    spawnWord() {
        let randomLoc = (Math.random() * 690);
        let word = new Word(this, this.ctx, this.canvas, this.dictionary.randomWord(), randomLoc, 0, this.wordScore, this.wordSpeed);
        this.words.unshift(word);
    };

    addSkill(word) {
        if (this.words[word].skill === 'bomb') {
            this.skills.push('bomb');
            this.maxSkill();

            let skill = document.createElement('div');
            skill.classList.add('bomb');
            skill.innerText = 'bomb';

            let skills = document.querySelector('.skill-names');
            skills.appendChild(skill);
        };

        if (this.words[word].skill === 'health') {
            this.skills.push('health');
            this.maxSkill();

            let skill = document.createElement('div');
            skill.classList.add('health');
            skill.innerText = 'health';

            let skills = document.querySelector('.skill-names');
            skills.appendChild(skill);
        };

        if (this.words[word].skill === 'slow') {
            this.skills.push('slow');
            this.maxSkill();

            let skill = document.createElement('div');
            skill.classList.add('slow');
            skill.innerText = 'slow';

            let skills = document.querySelector('.skill-names');
            skills.appendChild(skill);
        };
    };

    maxSkill() {
        if (this.skills.length > 10) {
            this.skills.shift();
        };

        if (document.querySelector('.skill-names').children.length > 8) {
            document.querySelector('.skill-names').firstChild.remove();
        };
    };

    handleSkill(value) {
        for (let skill in this.skills) {
            let skillNames = document.querySelector('.skill-names').children;

            if (value === this.skills[skill]) {
                this.skills.splice(skill, 1);

                for (let skillName in skillNames) {
                    if (value === skillNames[skillName].innerText) {
                        skillNames[skillName].remove();

                        this.handleBomb(value);
                        this.handleHealth(value);
                        this.handleSlow(value);

                        this.input.value = '';
                        return;
                    };
                };
            };
        };
    };

    handleBomb(value) {
        if (value === 'bomb') {
            this.words = [];
            this.score += (this.wordScore * 10)
        };
    };

    handleHealth(value) {
        if (value === 'health') {
            this.lives = 10;
        };
    };

    handleSlow(value) {
        if (value === 'slow') {
            for (let word in this.words) {
                this.words[word].dy /= 4;
            };

            this.wordSpeed /= 4;

            window.setTimeout(() => {

                this.wordSpeed *= 4;

                for (let word in this.words) {
                    this.words[word].dy = this.wordSpeed;
                };

            }, 5000);
        };
    };


    // COME BACK TO DEMO!!!
    startDemo(value) {
        if (value === "demo" && this.demo === null) {
            this.demo = new Demo(this);
        };
    }
    // /////////////////

    handleWord(e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
            let value = this.input.value.trim();

            for (let word in this.words) {
                if (value === this.words[word].word) {
                    this.score += this.words[word].score;

                    this.addSkill(word);

                    this.words.splice(word, 1);
                    break;
                };
            };

            this.handleSkill(value);
            this.startDemo(value);

            this.input.value = "";
        };
    };

    render() {
        if (this.gameOver === true) {
            return;
        };

        this.updateGameInfo();

        this.spawnWords();

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.req = requestAnimationFrame(this.render);

        this.input.focus();
        this.input.addEventListener('keydown', this.handleWord);

        for (let i = 0; i < this.words.length; ++i) {
            this.words[i].render();
        };
    };

    startGame() {
        this.interval();
        requestAnimationFrame(this.render);
    };

    checkGameOver() {
        if (this.lives < 1) {
            this.gameOver = true;

            const gameOver = document.querySelector('.game-over')
            gameOver.classList.add('effect');

            const score = document.createElement('div');
            score.innerText = this.score;
            gameOver.appendChild(score);

            addEventListener('keydown', e => {
                if (e.keyCode === 9) {
                    window.location.reload(false);
                };
            });

        };
    };
};