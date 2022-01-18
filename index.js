var express = require('express');
var app = express();

app.get("/" ,function(req,res) {
    res.sendFile(__dirname + "/"+ "index.html");
});
app.get('/home',function(req,res) {
    res.sendFile('<h1> welcome' + req.query['username']
    +'</h1><br><h2>mailid:' +req.query['mailid']+'</h2>');
});
app.listen(1010);