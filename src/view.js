class View {
    constructor(parentElement, width, height, size = 4) {
        this.parentElement = parentElement;
        this.canvas = document.createElement('canvas');
        this.width = width;
        this.height = height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        this.parentElement.appendChild(this.canvas);

        this.blockWidth = this.width / size;
        this.blockHeight = this.height / size;

        this.colors = {
            2: 'cyan',
            4: 'blue',
            8: 'green',
            16: 'yellow',
            32: 'orange',
            64: 'red',
            128: 'darkred',
            256: 'violet',
            512: 'lightgreen',
            1024: 'darkblue',
            2048: 'black'
        };
    }

    render(state) {
        this.clearScreen();
        this.renderPlayfield(state);
    }

    renderPlayfield({playfield}) {
        for (let y = 0; y < playfield.length; y++) {
            for (let x = 0; x < playfield[y].length; x++) {
                if(playfield[y][x] > 0) {
                    this.renderBlock(
                        x * this.blockWidth,
                        y * this.blockHeight,
                        this.blockWidth,
                        this.blockHeight,
                        playfield[y][x],
                        this.colors[playfield[y][x]]
                    );
                }
            }
        }
    }

    renderBlock(x, y, width, height, value, color) {
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = '5';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.font = 'bold 32px Arial';

        this.ctx.strokeRect(x, y, width, height);
        this.ctx.fillText(value, x + this.blockWidth/2, y + this.blockHeight/2);
    }

    clearScreen() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

