console.log('\n---------------\n程式重新啟動中...\n---------------\n');

var express = require('express'),
    config = require('./config/config'),
    db = require('./app/models');

var sequelize_fixtures = require('sequelize-fixtures');

var app = express();

require('./config/express')(app, config);


var forceSync = false;
var syncOption = {};

forceSync = true;

if (forceSync){
    syncOption.force = true;
}

db.sequelize
    .sync(syncOption)
    .complete(function(err) {
        if (err) {
            console.log(err);
            throw err[0];
        } else {

            if (forceSync){
                console.log('資料重建');
                sequelize_fixtures.loadFile('app/fixtures/*.json', db, function(){
                    console.log('sequelize fixtures done');

                });
            }

            app.listen(config.port, function(err, message){
                console.log('伺服器啟動完成');
                err && console.log('err', err);
                message && console.log('message', message);
            });
        }
    });
