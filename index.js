var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});


console.log('changes done in feature branch');

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')

console.log("changes are now followed into the development branch to see conflicts")