var express = require('express');

var app = express.createServer(express.logger());

var content;

var i = fs.readFileSync("./index.html", function read(err,data){
 if(err){
  throw err;
 }
 content = data;
});

app.get('/', function(request, response) {
  response.send(content);  // echo out index.html
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
