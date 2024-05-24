export default class InputHandler {
    constructor() {
        this.keys = [];
        this.musicButton = document.getElementById('musicButton');
        window.addEventListener('keydown', (e) => {
            if ((   e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowDown' || 
                    e.key === 'Enter') 
                    && this.keys.indexOf(e.key) === -1) 
                this.keys.push(e.key);
        });
        window.addEventListener('keyup', (e) => {
            if (    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowDown' ||
                    e.key === 'Enter')
                this.keys.splice(e.key);        
        });
        this.musicButton.addEventListener('click', function() {
            const bgm = document.getElementById('backgroundMusic');
            if (bgm.paused) {
                bgm.play();
                this.innerHTML = 'Stop Music';
            }
            else {
                bgm.pause();
                this.innerHTML = 'Play Music';
            }
        });
    }
}