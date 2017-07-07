'use strict';

var http = require('https');
var restify = require('restify');
var handlers = require(__dirname + '/handlers');
var models = require(__dirname + '/lib/db').models;

var app = restify.createServer({
  name: 'fantfball'
});

app.server.dbModels = models;

app.use(function setupScope (req, res, next) {
  req.db = app.server.dbModels;
  next();
});

app.get('/', function (req, res, next) {
  res.header('content-type', 'text/plain');
  res.send(200, 'This is a homepage');
  next();
});

app.post('/position', handlers.getPlayersByPosition);
app.post('/name', handlers.getPlayersByName);

app.get('/rank', handlers.getPlayersByRank);

module.exports = app;