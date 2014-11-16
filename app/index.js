
console.log('\n---------------\n程式重新啟動中...\n---------------\n');



var express = require('express'),
    config = require('../config/config.js');

require('./models');

var app = express();

require('../config/express')(app, config);

module.exports = app;
