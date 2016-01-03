var http = require("http");

var options = {
    host : "10.0.0.4",
    port : 8888,
    path : "/",
    method : "POST"};


var loptions = {
    host : "127.0.0.1",
    port : 8888,
    path : "/",
    method : "POST"};

var resp = [];

console.log("******* " + process.argv[2] + "\n");

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

request.write(process.argv.slice(2, -1).join());    

request.end();
