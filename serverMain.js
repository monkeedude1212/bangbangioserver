var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    console.log(util.inspect(req, {
        depth: 5,
        colors: true,
      }));
    
    var date = new Date();
    const data = {
        message: 'Hello World from the server!',
        time: date.toISOString(),
        version: 1
    }
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(data));
}).listen(8080);