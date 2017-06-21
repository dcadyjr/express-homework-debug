var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');






  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  })



// first argument is the port number
server.listen(3000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
