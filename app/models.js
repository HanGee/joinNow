var express = require('express'),
    config = require('../config/config'),
    glob = require('glob'),
    mongoose = require('mongoose');

var db = {};

mongoose.connect(config.db);
mongoose.set('debug', true);
var connection = mongoose.connection;

connection.on('connected', function () {
    console.log('資料庫連接成功');
});
connection.on('error', function () {
    throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');

models.forEach(function (model) {
    var modelObject = require(model);
    db[modelObject.modelName] = modelObject;
});


module.exports = db;
