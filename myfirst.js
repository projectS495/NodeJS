// http a built in module that can create listen for the web browser
var http = require('http');
// to include my own module
var dt  = require('./myfirstmodule');

// to write on the server
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // accessing the export function in included module
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);