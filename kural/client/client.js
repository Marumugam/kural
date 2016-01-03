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

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var request = http.request(loptions,function(response){
    response.on("data",function(data){
	console.log(data.toString());
    });
});

while(1) {
    rl.on('line', function(line){
	request.write(line);    
	console.log(line)
    });
}


request.end();
