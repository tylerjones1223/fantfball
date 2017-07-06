'use strict';

var http = require('https');
var restify = require('restify');

var app = restify.createServer({
  name: 'fantfball'
});

app.get('/echo', function echo (req, res, next) {
  res.header('content-type', 'text/plain');
  res.send(200, 'HiYo!\n');
  next();
});

module.exports = app;