import Player from "./player.js";
import InputHandler from "./input.js";
import { PuppetEnemy } from "./enemy.js";
import { Background } from "./background.js";
import { UI } from "./ui.js"

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1300;
    canvas.height = 780;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = -53;
            this.speed = 0;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.ui = new UI(this);
            // this.enemies = [new PuppetEnemy(this)];
            this.enemies = [];
            this.enemyTimer = 0;
            this.enemyInterval = 1000;
            this.collisions = [];
            this.debug = false;
            this.fontColor = 'white';
            this.gameOver = false;
            this.score = 0;
            this.hearts = 6;
        }
        update(deltaTime) {
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            // if (this.enemyTimer > this.enemyInterval) {
            //     this.addEnemy();
            //     this.enemyTimer = 0;
            // }
            // else this.enemyTimer += deltaTime;
            this.enemies.forEach((enemy, index) => {
                enemy.update(deltaTime)
                if (enemy.markedForDeletion) {
                    this.enemies.splice(index, 1);
                }
            });
        }
        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => enemy.draw(context));
            this.ui.draw(context);
        }
        addEnemy(){
            this.enemies.push(new PuppetEnemy(this));
        }
    }

    const game = new Game(canvas.width, canvas.height);
    
    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
    }
    animate(0);
}); 