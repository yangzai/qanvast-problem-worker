'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  
  if (req.query.name) {
    var result = 'Hello! Nice to meet you, ' + req.query.name + '!';
    res.send(result);
    console.log(result);
  } else {
    res.status(400).send("Missing query parameter 'name'.");
  }
  
});

var server = app.listen(port, function () {
  
  var host = server.address().address;
  console.log('Worker listening at http://%s:%s', host, port);
  
});