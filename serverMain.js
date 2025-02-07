var http = require('http');

http.createServer(function (req, res) {
    
    var date = new Date();
    const data = {
        message: 'Hello World from the server!',
        time: date.toISOString(),
    }
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(data));
}).listen(8080);