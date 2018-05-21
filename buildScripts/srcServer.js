var express = require('express'); //express is a dev server
var path = require('path');
var open = require('open')//opens our site in the browser

var port = 3000;
var app = express(); //creates an instance of express and sets it to the variable app

// tell express any references to the root should be handled by this function
// __dirname gets us the directory name that we are currently running in
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, '../src/index.html'));
});

//tell express to listen on port we defined above, with error handling
app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port)
  }
});
