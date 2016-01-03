var http = require("http");

var options = {
    host : "10.0.0.4",
    port : 8888,
    path : "/",
    method : "POST"};

var resp = []

var request = http.request(options,function(response){

  response.on("data",function(chunk){
		//console.log(data.toString());
		resp.push(chunk)
	}).on('end', function () {
    // now I can process the data
		response_string = Buffer.concat(resp).toString()
		console.log(response_string)
	});

});


request.write("Some Request!");

request.end();
