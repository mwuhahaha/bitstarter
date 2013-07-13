var express = require('express');

var app = express.createServer(express.logger());

var i = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(i);  // echo out index.html
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
