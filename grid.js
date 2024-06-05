export default class Grid {
    constructor(scene, cellWidth, cellHeight, gameWidth, gameHeight) {
        
        this.scene = scene;
        
        this.gameWidth = gameWidth ? gameWidth : scene.game.config.width;
        this.gameHeight = gameHeight ? gameHeight : scene.game.config.height;
        
        
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        
        this.rows = this.gameHeight / cellHeight;
        this.cols = this.gameWidth / cellWidth
        
    }
    
    
    show() {
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(4, 0xff0000);
        
        for (var i = 0; i < this.gameWidth; i += this.cellWidth) {
            this.graphics.moveTo(i, 0);
            this.graphics.lineTo(i, this.gameHeight);
        }
        
        for (var i = 0; i < this.gameHeight; i += this.cellHeight) {
            this.graphics.moveTo(0, i);
            this.graphics.lineTo(this.gameWidth, i);
        }
        this.graphics.strokePath();
        
        var n = 0;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                var numText = this.scene.add.text(0, 0, n, {
                    color: 'red'
                });
                numText.setOrigin(0.5, 0.5);
                
                var x2 = this.cellWidth * j + this.cellWidth / 2;
                var y2 = this.cellHeight * i + this.cellHeight / 2;
                
                numText.setPosition(x2, y2)
                
                n++;
                
            }
        }
        
        
    }
    
    placeAtIndex(index, obj) {
        var y = Math.floor(index / this.cols);
        var x = index - (y * this.cols);
        
        var newX = this.cellWidth * x + this.cellWidth / 2;
        var newY = this.cellHeight * y + this.cellHeight / 2;
        
        obj.setPosition(newX, newY)
        
    }
    
}