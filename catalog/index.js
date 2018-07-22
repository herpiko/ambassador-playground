var express = require('express');
var app = express();

app.get('/api/v1/books', function(req, res) {
	  res.send("books")
});
app.get('/api/v1/music', function(req, res) {
	  res.send("music")
});

app.listen(8020);
