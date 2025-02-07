var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
        'content-type': 'application/json'
      }
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

    res.writeHead(200, headers);
    res.end(JSON.stringify(data));
}).listen(8080);