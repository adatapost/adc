var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>A DATAPOST COMPUTER CENTRE</h1>');
  res.end('<h1>MEHSANA</h1>');
}).listen(port);