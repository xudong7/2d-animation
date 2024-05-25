class Enemy {
    constructor() {
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }
    update(deltaTime) {
        if (this.game.player.x < this.game.width - this.game.player.width && this.game.player.speed != 0)
            this.x -= this.game.speed * 0.1;
        // this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
            this.frameTimer = 0;
        }
        else this.frameTimer += deltaTime;
        if (this.x < -this.width) this.markedForDeletion = true;
    }
    draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 
            this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height,
            this.x, this.y, this.width, this.height);
    }
}

export class PuppetEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width - this.width + 100;
        this.y = this.game.height - this.height + this.game.groundMargin - 5;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 3;
        this.image = document.getElementById('enemy-idle-left');
    }
    update(deltaTime) {
        super.update(deltaTime);
    }
}
