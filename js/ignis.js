function IgnisCanvas() {
    
    var gameConfig = { 
                        preload: preload, 
                        create: create, 
                        update : update 
                     };
                              
    var game = new Phaser.Game(520, 520, Phaser.AUTO, "canvasArea", gameConfig);
    
    
}


window.onload = function() {

    function preload () {
        game.load.image("logo", "images/cave.png");
    }

    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, "logo");

        generateChessTexture();    
        var map1 = new IgnisMap(20,15);
        var map2 = new IgnisMap(50,50);
        
        console.log(map1.toString());
        console.log(map2.toString());    
    }
    
    function generateChessTexture() {
        // Create the chess texture
        var graphics = game.add.graphics(0, 0);
        
        graphics.beginFill(0xFFFFFF);
        graphics.drawRect(0, 0, 32, 32);
        graphics.endFill();
        
        graphics.beginFill(0x666666);
        graphics.drawRect(16, 0, 16, 16);
        graphics.drawRect(0, 16, 16, 16);
        graphics.endFill();      
        
        chessTexture = game.add.sprite(0, 0, graphics.generateTexture()); 
        
        graphics.destroy();                
    }
    
    function update() {

    }
    
    window.onresize = function() {
        
        var renderArea = document.getElementById("renderArea"); 
        
        var width = renderArea.clientWidth;
        var height = renderArea.clientHeight;
        
        
        if (game.renderType === Phaser.WEBGL) {	
            game.renderer.resize(width, height);
        }      
                         
        game.width = width;
        game.height = height;          
        
    }
    
                
        
};