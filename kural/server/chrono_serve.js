var http = require("http");
var body = []

http.createServer(function(request, response) {

	request.on('data',function(chunk){
		//console.log(chunk)
		body.push(chunk)
	}).on('end',function(){
		// print the accumulated content
		console.log(Buffer.concat(body).toString());
		//console.log(body)

		// respond
	  response.writeHead(200, {"Content-Type": "text/plain"});
 		response.write("<meta>nil</meta>");
		response.write("<msg>I have received your request</msg>");
		response.write("<msg>This is my response</msg>");
 		response.end();
	})


}).listen(8888);
