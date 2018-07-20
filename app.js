var express = require('express');
var app = express();
var request = require('request');
var http = require('http').Server(app);

app.get("/results", function(req, res){
	request("http://www.omdbapi.com/?apikey=thewdb&s=harry", function(error, response, body){
		if(!error && response.statusCode == 200){
			var results = JSON.parse(body);
			res.send(results);
		}
	});
});

http.listen(3000, function(){
	console.log("Server started on *:3000");
});