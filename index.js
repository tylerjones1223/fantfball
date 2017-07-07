'use strict';

var api;
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'FantFball'});
var sprintf = require('util').format;
var port = process.env.SERVER_PORT || '4434';

api = require(__dirname + '/api');

api.listen(port, function () {
  log.info(sprintf('Server accepting requests on port %d', port));
});