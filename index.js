var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

const mongoose = require('mongoose');
const config = require('./config');

const formRouter = require('./routes/form.route');

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});

mongoose.connect(config.mongo_url, {}, function (err) {
    if (err) console.log(err);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/form', formRouter);

