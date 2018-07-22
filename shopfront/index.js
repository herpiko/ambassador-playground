var express = require('express');
var app = express();

app.get('/', function(req, res) {
	  res.send("shopfront")
});

app.listen(8010);
