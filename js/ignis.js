'use strict';

/******************************************************************
 * GLOBALS 
 ******************************************************************/

function generateChessTexture(game) {
    // Create the chess texture
    
    var graphics = game.add.graphics(0, 0);
    
    graphics.beginFill(0xFFFFFF);
    graphics.drawRect(0, 0, 32, 32);
    graphics.endFill();
    
    graphics.beginFill(0xCCCCCC);
    graphics.drawRect(16, 0, 16, 16);
    graphics.drawRect(0, 16, 16, 16);
    graphics.endFill();      
    
    var tex = graphics.generateTexture();
    
    graphics.destroy();                
    return tex;
}


/******************************************************************
 * OOP
******************************************************************/
function IgnisGameLevel(game,name,cellSize,tileWidth,tileHeight) {
    
    var game = game;
    var name = name;
    var cellSize = cellSize;
    var tileWidth = tileWidth;
    var tileHeight = tileHeights;
    var chessTexture = generateChessTexture();
    
    //var tilemap = new Tilemap(gameRef, null, cellSize, cellSize, tileWidth, tileHeight);
            
}

/******************************************************************
 ** MAIN CANVAS
 ******************************************************************/
function IgnisCanvas(id,listener) {
    
   var parentId = id;
   var resizeListener = listener;
   
   var game = null;
   var gameConfig = 
                 { 
                    preload: preload, 
                    create: create, 
                    update : update 
                 };
                 
   var currentMap = null;                             
   var chessTexture = null;
   var cursor = null;  
                 
   // public methods have access to private members
   this.setParendId = function(id) {
       parentId = id;
   }

   this.getParendId = function() {
        return parentId;
   }
   
   this.setResizeListener = function(listener) {
       resizeListener = listener;
   }

   this.getResizeListener = function() {
        return resizeListener;
   }
   
   this.setGame = function(g) {
       game = g;
   }

   this.getGame = function() {
        return game;
   }      
   
   this.getGameConfig = function() {
       return gameConfig;
   }  
   
   function invalidateBackground() {
       game.world.removeAll();
       
       var maxX = game.width / 32;
       var maxY = game.height / 32;
       
       for (var x=0;x <= maxX; x++) {
           for (var y=0;y <= maxY; y++) {
                game.add.sprite(x*32,y*32,chessTexture);    
           }           
       }
       
       // Create the Cursor
       cursor = game.add.graphics();
       cursor.lineStyle(2, 0x000000, 1);
       cursor.drawRect(0, 0, 32, 32);              
   }     
   
   this.invalidateBackground = function() {
       invalidateBackground();
   }       

   function create() {
       //currentMap = new Tilemap(game);
       invalidateBackground();          
   }
    
   function preload() {
       game.stage.backgroundColor = "#999999";
       chessTexture = generateChessTexture(game);
        //game.load.image("tileset", "images/cave.png");
   }
    
   function update() {
              
       cursor.x = Math.floor(game.input.activePointer.x / 32) * 32;
       cursor.y = Math.floor(game.input.activePointer.y / 32) * 32;

   }
            
}


/*
    Create the PhaserJS Canvas 
*/
IgnisCanvas.prototype.startCanvas = function() {
        
    // Get container                  
    var renderArea = document.getElementById(this.getResizeListener()); 
    
    // Container Size
    var width = renderArea.clientWidth;
    var height = renderArea.clientHeight;
                                    
    this.setGame(new Phaser.Game(width,height, Phaser.AUTO, this.getParendId(), this.getGameConfig() ));       
}

IgnisCanvas.prototype.resizeCanvas = function() {
        
    var game = this.getGame();        
    if (game) {
            
        var renderArea = document.getElementById(this.getResizeListener()); 
        
        var width = renderArea.clientWidth;
        var height = renderArea.clientHeight;
                                        
        game.width = width;
        game.height = height;            
        
        if (game.renderType === Phaser.WEBGL) {	
            game.renderer.resize(width, height);
        }
        
        this.invalidateBackground();      
              
    }
}