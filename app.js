var express = require('express');
var app = express();
var request = require('request');
var http = require('http').Server(app);

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var movie = req.query.search;
	var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + movie;
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

http.listen(3000, function(){
	console.log("Server started on *:3000");
});