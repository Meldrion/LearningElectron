function IgnisMap(width,height) {
    
    this.width = width;
    this.height = height;
    
    this.toString = function() {
        return "Map Dimension: " + this.width + " * " + this.height; 
    }
    
}

function IgnisCanvas(parentId,resizeListener) {
    
   this.parentId = parentId;
   this.resizeListener = resizeListener;
   this.game = null;
   this.gameConfig = null;
    
   this.generateChessTexture = function () {
        // Create the chess texture
        var graphics = this.game.add.graphics(0, 0);
        
        graphics.beginFill(0xFFFFFF);
        graphics.drawRect(0, 0, 32, 32);
        graphics.endFill();
        
        graphics.beginFill(0x666666);
        graphics.drawRect(16, 0, 16, 16);
        graphics.drawRect(0, 16, 16, 16);
        graphics.endFill();      
        
        chessTexture = this.game.add.sprite(0, 0, graphics.generateTexture()); 
        
        graphics.destroy();                
    }

    this.create = function () {
        var logo = this.game.add.sprite(10,0, "logo");

        //this.generateChessTexture();    
        var map1 = new IgnisMap(20,15);
        var map2 = new IgnisMap(50,50);
        
        console.log(map1.toString());
        console.log(map2.toString());    
    }

    this.preload = function () {
        this.game.load.image("logo", "images/cave.png");
    }
    
    this.update = function() {

    }
    
    /*
        Create the PhaserJS Canvas 
     */
    this.startCanvas = function() {
        // Config for the PhaserJS Canvas
        this.gameConfig = { 
                            preload: this.preload, 
                            create: this.create, 
                            update : this.update 
                     };
        
        // Get container                  
        var renderArea = document.getElementById(this.resizeListener); 
        
        // Container Size
        var width = renderArea.clientWidth;
        var height = renderArea.clientHeight;
                                      
        this.game = new Phaser.Game(width,height, Phaser.AUTO, this.parentId, this.gameConfig);       
    }
    
    this.resizeCanvas = function() {
        
        if (this.game) {
            
            var renderArea = document.getElementById(this.resizeListener); 
            
            var width = renderArea.clientWidth;
            var height = renderArea.clientHeight;
            
            
            if (this.game.renderType === Phaser.WEBGL) {	
                this.game.renderer.resize(width, height);
            }      
                            
            this.game.width = width;
            this.game.height = height;            
        }
        
    }    
}