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
    }
}