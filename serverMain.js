var http = require('http');

http.createServer(function (req, res) {
    const data = {
        message: 'Hello World from the server!'
    }
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(data));
}).listen(8080);