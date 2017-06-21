var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname, "views")));

app.set('views', path.join(__dirname, "views"));

app.set('view engine', "hbs");

  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  })

app.get('/layout', function(req, res){
	res.render('layout');
})

app.get('/page2', function(req, res){
	res.render('page2');
})

app.get('/page1', function(req, res){
	res.render('page1');
})

app.get('/json1', function (req, res){
	var json1 = {album: "The Bends", first_song: "Planet Telex"}
	console.log(json1);
	res.send(json1);
})

app.get('/json2', function (req, res){
	var json2 = {album: "OK Compuer", first_song: "Airbag"}
	console.log(json2);
	res.send(json2);
})

app.get('/text', function(req, res){
	res.send("this wont tell you what you need to know")
})

// first argument is the port number
server.listen(3000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
