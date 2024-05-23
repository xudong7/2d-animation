const states = {
    STANDING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3
}

class State {
    constructor(state) {    
        this.state = state;
    }
}

export class Standing extends State {
    constructor(player) {
        super('STANDING');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('idle');
        this.player.frameX = 0;
        this.player.frameY = 0;
        this.player.maxFrame = 17;
    }
    handleInput(input) {
        if (input.includes('ArrowUp')) 
            this.player.setState(states.JUMPING);
        if (input.includes('ArrowRight')) 
            this.player.setState(states.RUNNING);
    }
}

export class Running extends State {
    constructor(player) {
        super('RUNNING');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('run');
        this.player.frameX = 0;
        this.player.maxFrame = 23;
        this.player.frameY = 0;
    }
    handleInput(input) {
        if (input.includes('ArrowDown')) 
            this.player.setState(states.STANDING);
        else if (input.includes('ArrowUp'))
            this.player.setState(states.JUMPING);
    }
}

export class Jumping extends State {
    constructor(player) {
        super('JUMPING');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('jump');
        if (this.player.onGround()) 
            this.player.vy = -10;
        this.player.frameY = 0;
        this.player.maxFrame = 18;
        this.player.frameX = 0;
    }
    handleInput(input) {
        if (this.player.vy > this.player.weight) 
            this.player.setState(states.FALLING);
    }
}

export class Falling extends State {
    constructor(player) {
        super('FALLING');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('jump');
        this.player.maxFrame = 9;
        this.player.frameY = 0;
        this.player.frameX = 8;
    }
    handleInput(input) {
        if (this.player.onGround()) 
            this.player.setState(states.STANDING);
    }
}