export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 20;
        this.fontFamily = 'consolas';
        this.heartsImage = document.getElementById('heart');
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText('Score: ' + this.game.score, 10, 30);
        // hearts
        for (let i = 0; i < this.game.hearts; i++)
            context.drawImage(this.heartsImage, 18 * i + 8, 50, 16 * 1.25, 16 * 1.25);
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize + 'px ' + this.fontFamily;
            context.fillText(`Game Over! Your score: ${this.game.score}`, this.game.width / 2, this.game.height / 2);
            context.fillText('Press R to restart', this.game.width / 2, this.game.height / 2 + 50);
        }
    }
}