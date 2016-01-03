var http = require("http");
var body = []

// stackexchange
var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
  key: 'P)GKng7s9bYCYlDfU6*H4Q((',
  pagesize: 50,
  tagged: 'node.js',
  sort: 'activity',
  order: 'asc'
};
// -------------------------- //

// google handle
var google = require("google")

google.resultsPerPage = 25
var nextCounter = 0

http.createServer(function(request, response) {

	request.on('data',function(chunk){
		//console.log(chunk)
		body.push(chunk)
	}).on('end',function(){
		// print the accumulated content
		request_keyword = Buffer.concat(body).toString()
		console.log(">> Received from " + request.url + " : " + request_keyword)
	
		var response_links = ""

		// Get all the questions (http://api.stackexchange.com/docs/questions)
		context.questions.questions(filter, function(err, results){
			if (err) throw err;

			//console.log(results.items);
			//console.log(results.has_more);

			response.write(JSON.stringify(results.items))
			//response.write(JSON.stringify(results.has_more))
			//response.write("end of stuff")
			response.end();

		});

		// we have the request to forward to google	
		/*
		google(request_keyword, function (err, next, links){
			if (err) console.error(err)

			for (var i = 0; i < links.length; ++i) {
				//console.log(links[i].title + ' - ' + links[i].link) // link.href is an alias for link.link
				//console.log(links[i].description + "\n")
				response_links += links[i].title + ' - ' + links[i].link
				response_links += links[i].description + "\n"
			}

		if (nextCounter < 4) {
			nextCounter += 1
			if (next) next()
		}
		else{

			// respond
			response.writeHead(200, {"Content-Type": "text/plain"});
			//response.write("<meta>nil</meta>");
			//response.write("<msg>I have received your request</msg>");
			//response.write("<msg>This is my response</msg>");
			response.write(response_links)
			response.write("cool stuff")
			response.end();



		}

		})*/

	})


}).listen(8888);
