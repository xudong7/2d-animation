import { StandingLeft, StandingRight, RunningLeft, RunningRight, JumpingLeft, JumpingRight, FallingLeft, FallingRight } from "./state.js";

export default class Player {
    constructor(game) {
        this.game = game;
        this.width = 80;
        this.height = 80;
        this.x = 0;
        this.y = this.game.height - this.height + this.game.groundMargin;
        this.vy = 0;
        this.weight = 0.2;
        this.image = document.getElementById('idle-right'); 
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 16;
        this.fps = 60;
        this.frameInterval = 3000 / this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = 1;
        this.states = [new StandingLeft(this), new StandingRight(this),
            new RunningLeft(this), new RunningRight(this),
            new JumpingLeft(this), new JumpingRight(this),
            new FallingLeft(this), new FallingRight(this)];
        this.currentState = this.states[1];
        this.currentState.enter();
    }
    update(input, deltaTime) {
        this.currentState.handleInput(input);
        // horizontal movement
        this.x += this.speed;
        if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else this.speed = 0;
        // boundary check
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        // vertical movement
        this.y += this.vy;
        // gravity
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
            this.frameTimer = 0;
        }
        else this.frameTimer += deltaTime;
    }
    draw(context) {
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 
            this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height,
            this.x, this.y, this.width, this.height);
    }   
    onGround() {
        return this.y >= this.game.height - this.height + this.game.groundMargin;
    }
    setState(state, speed) {
        this.currentState = this.states[state];
        this.game.speed = this.game.maxSpeed * speed;
        this.currentState.enter();
    }
}
