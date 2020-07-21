var http = require('http');
const play= require("stringplay");

http.createServer(function (req, res) 
	{    
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello Node!\n');
		res.end(play.upper('Hello Node!', 1,6));   
	}).listen(8080);



console.log('Server started on localhost:8080; press Ctrl-C to terminate....');