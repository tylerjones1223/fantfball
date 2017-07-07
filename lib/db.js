'use strict';

var Sequelize = require('sequelize');
var models = require(__dirname + '/models');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'FantFball'});

var db = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    pool: {
      maxIdleTime: ~~process.env.DB_MAX_IDLE_TIME || 2 * 1000,
      minConnections: ~~process.env.DB_MIN_CONNECTIONS || 10,
      maxConnections: ~~process.env.DB_MAX_CONNECTIONS || 20
    }
});

db
.authenticate()
.then(function () {
  log.info('DB Connected');
  db.sync();
})
.catch(function (err) {
  log.err({
    err: err
  }, 'Unable to connect to DB');
});

module.exports = db;