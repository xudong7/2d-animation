class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        if (this.x < -this.width) this.x = 0;
        else if (this.game.player.x != 0 && this.game.player.x != this.game.width - this.game.player.width) this.x -= this.game.player.speed * this.speedModifier;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width - 1.8, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 928;
        this.height = 793;
        this.layer0Image = document.getElementById('layer0');
        this.layer1Image = document.getElementById('layer1');
        this.layer2Image = document.getElementById('layer2');
        this.layer3Image = document.getElementById('layer3');
        this.layer4Image = document.getElementById('layer4');
        this.layer5Image = document.getElementById('layer5');
        this.layer6Image = document.getElementById('layer6');
        this.layer7Image = document.getElementById('layer7');
        this.layer8Image = document.getElementById('layer8');
        this.layer9Image = document.getElementById('layer9');
        this.layer10Image = document.getElementById('layer10');
        this.layer11Image = document.getElementById('layer11');
        this.layer0 = new Layer(this.game, this.width, this.height, 0.4, this.layer0Image);
        this.layer1 = new Layer(this.game, this.width, this.height, 0.4, this.layer1Image);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.4, this.layer2Image);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.35, this.layer3Image);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.3, this.layer4Image);
        this.layer5 = new Layer(this.game, this.width, this.height, 0.25, this.layer5Image);
        this.layer6 = new Layer(this.game, this.width, this.height, 0.2, this.layer6Image);
        this.layer7 = new Layer(this.game, this.width, this.height, 0.15, this.layer7Image);
        this.layer8 = new Layer(this.game, this.width, this.height, 0.1, this.layer8Image);
        this.layer9 = new Layer(this.game, this.width, this.height, 0.05, this.layer9Image);
        this.layer10 = new Layer(this.game, this.width, this.height, 0, this.layer10Image);
        this.layer11 = new Layer(this.game, this.width, this.height, 0, this.layer11Image);
        this.backgroundLayers = [this.layer11, this.layer10, this.layer9, this.layer8,
            this.layer7, this.layer6, this.layer5, this.layer4,
            this.layer3, this.layer2, this.layer1, this.layer0]
    }
    update() {
        this.backgroundLayers.forEach(layer => layer.update());
    }
    draw(context) {
        this.backgroundLayers.forEach(layer => layer.draw(context));
    }
}