var http = require("http");

var options = {
    host : "10.0.0.4",
    port : 8888,
    path : "/",
    method : "POST"};

var request = http.request(options,function(response){

    response.on("data",function(data){
	console.log(data.toString());
    });

});


request.write("Some Request!");

request.end();