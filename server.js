var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var PORT = process.env.PORT || 7777

var app = express();
var compiler = webpack(config);

// body parser

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// use my static files like .js and images
app.use(express.static(path.join(__dirname + "/src")));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// post requests 

app.post("/hello", function(req, res){
  var message = req.body.data
  res.send({type: "HAT", payload: "fresh"});
  console.log(message);
});

app.post("/kcc", function(req, res){

  var incoming = req.body.data
  res.send({type: "DON_CARE", payload: "watermelon"});
  console.log(incoming);

});




app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});
