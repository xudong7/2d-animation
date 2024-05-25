const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    RUNNING_LEFT: 2,
    RUNNING_RIGHT: 3,
    JUMPING_LEFT: 4,
    JUMPING_RIGHT: 5,
    FALLING_LEFT: 6,
    FALLING_RIGHT: 7,
    ATTACKING_LEFT: 8,
    ATTACKING_RIGHT: 9,
}

class State {
    constructor(state) {    
        this.state = state;
    }
}

export class StandingLeft extends State {
    constructor(player) {
        super('STANDING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('idle-left');
        this.player.frameX = 0;
        this.player.frameY = 0;
        this.player.maxFrame = 15;
    }
    handleInput(input) {
        if (input.includes('ArrowUp') || input.includes('w')) 
            this.player.setState(states.JUMPING_LEFT, -1);
        else if (input.includes('ArrowRight') || input.includes('d')) 
            this.player.setState(states.STANDING_RIGHT, 0);
        else if (input.includes('ArrowLeft') || input.includes('a'))
            this.player.setState(states.RUNNING_LEFT, -1);
        else if (input.includes('j'))
            this.player.setState(states.ATTACKING_LEFT, -1);
    }
}

export class StandingRight extends State {
    constructor(player) {
        super('STANDING_RIGHT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('idle-right');
        this.player.frameX = 0;
        this.player.frameY = 0;
        this.player.maxFrame = 15;
    }
    handleInput(input) {
        if (input.includes('ArrowUp') || input.includes('w')) 
            this.player.setState(states.JUMPING_RIGHT, 1);
        else if (input.includes('ArrowRight') || input.includes('d')) 
            this.player.setState(states.RUNNING_RIGHT, 1);
        else if (input.includes('ArrowLeft') || input.includes('a'))
            this.player.setState(states.STANDING_LEFT, 0);
        else if (input.includes('j'))
            this.player.setState(states.ATTACKING_RIGHT, 1);
    }
}

export class RunningLeft extends State {
    constructor(player) {
        super('RUNNING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('run-left');
        this.player.frameX = 0;
        this.player.maxFrame = 23;
        this.player.frameY = 0;
    }
    handleInput(input) {
        if (!input.includes('ArrowLeft') && !input.includes('a')) 
            this.player.setState(states.STANDING_LEFT, 0);
        else if (input.includes('ArrowUp') || input.includes('w'))
            this.player.setState(states.JUMPING_LEFT, -1);
        else if (input.includes('ArrowRight') || input.includes('d'))
            this.player.setState(states.STANDING_RIGHT, 0);
        else if (input.includes('j'))
            this.player.setState(states.ATTACKING_LEFT, -1);
    }
}

export class RunningRight extends State {
    constructor(player) {
        super('RUNNING_RIGHT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('run-right');
        this.player.frameX = 0;
        this.player.maxFrame = 23;
        this.player.frameY = 0;
    }
    handleInput(input) {
        if (!input.includes('ArrowRight') && !input.includes('d')) 
            this.player.setState(states.STANDING_RIGHT, 0);
        else if (input.includes('ArrowUp') || input.includes('w'))
            this.player.setState(states.JUMPING_RIGHT, 1);
        else if (input.includes('ArrowLeft') || input.includes('a'))
            this.player.setState(states.STANDING_LEFT, 0);
        else if (input.includes('j'))
            this.player.setState(states.ATTACKING_RIGHT, 1);
    }
}

export class JumpingLeft extends State {
    constructor(player) {
        super('JUMPING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('jump-left');
        if (this.player.onGround()) 
            this.player.vy = -5;
        this.player.frameY = 0;
        this.player.maxFrame = 18;
        this.player.frameX = 0; 
    }
    handleInput(input) {
        if (this.player.vy > this.player.weight) 
            this.player.setState(states.FALLING_LEFT, -1);
    }
}

export class JumpingRight extends State {
    constructor(player) {
        super('JUMPING_RIGHT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('jump-right');
        if (this.player.onGround()) 
            this.player.vy = -5;
        this.player.frameY = 0;
        this.player.maxFrame = 18;
        this.player.frameX = 0; 
    }
    handleInput(input) {
        if (this.player.vy > this.player.weight) 
            this.player.setState(states.FALLING_RIGHT, 1);
    }
}

export class FallingLeft extends State {
    constructor(player) {
        super('FALLING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('jump-left');
        this.player.maxFrame = 9;
        this.player.frameY = 0;
        this.player.frameX = 8;
    }
    handleInput(input) {
        if (this.player.onGround()) 
            this.player.setState(states.STANDING_LEFT, 0);
    }
}

export class FallingRight extends State {
    constructor(player) {
        super('FALLING_RIGHT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('jump-right');
        this.player.maxFrame = 9;
        this.player.frameY = 0;
        this.player.frameX = 8;
    }
    handleInput(input) {
        if (this.player.onGround()) 
            this.player.setState(states.STANDING_RIGHT, 0);
    }
}

export class AttackingLeft extends State {
    constructor(player) {
        super('ATTACKING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('attack-left');
        this.player.maxFrame = 24;
        this.player.frameY = 0;
        this.player.frameX = 0;
    }
    handleInput(input) {
        if (!input.includes('j')) 
            this.player.setState(states.STANDING_LEFT, 0);
    }
}

export class AttackingRight extends State {
    constructor(player) {
        super('ATTACKING_RIGHT');
        this.player = player;
    }
    enter() {
        this.player.image = document.getElementById('attack-right');
        this.player.maxFrame = 24;
        this.player.frameY = 0;
        this.player.frameX = 0;
    }
    handleInput(input) {
        if (!input.includes('j')) 
            this.player.setState(states.STANDING_RIGHT, 0);
    }
}