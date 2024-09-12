var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});

console.log('changes done in feature branch');

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')

const http = require('http');

// Create a server object
http.createServer(function (req, res) {

	// http header
	res.writeHead(200, { 'Content-Type': 'text/html' });

	const url = req.url;

	if (url === '/about') {
		res.write(' Welcome to about us page');
		res.end();
	}
	else if (url === '/contact') {
		res.write(' Welcome to contact us page');
		res.end();
	}
	else {
		res.write('Hello World!');
		res.end();
	}
}).listen(3000, function () {
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
