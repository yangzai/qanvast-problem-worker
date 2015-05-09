var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());


app.get('/', function (req, res) {
  
  if (req.query.name) {
    res.send('Hello! Nice to meet you, ' + req.query.name + '!');
    console.log('in worker');
  } else {
    res.status(400).send('Error: No name.');
  }
  
});

var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Worker app listening at http://%s:%s', host, port);

});