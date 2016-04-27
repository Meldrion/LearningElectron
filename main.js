(function(){
    
    var application = require('app'),
    BrowserWindow = require('browser-window');
    
    application.on('ready', function() {
        
        var mainWindow = new BrowserWindow({width: 600, height: 300});
        mainWindow.loadUrl('file://' + __dirname + '/index.html');
        mainWindow.on('closed', function() {
            mainWindow = null;
        });
          
    });
     
})();