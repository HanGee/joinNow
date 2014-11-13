var path = require('path'),
    _ = require('lodash'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    localConfig = require('./config.local');

var debug = require('debug')('joinNow:config');
var debugDB = require('debug')('joinNow:db:query');

function customDbLogger(){
    return debugDB.apply(null, arguments);
}

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'joinNow'
        },
        port: 3000,
        database: 'node-joinNow-development',
        username: 'node_joinNow',
        password: 'pass_joinNow',
        db: 'mongodb://localhost/node_joinNow_development',
        dbconfig: {
            db: 'mongodb://localhost/node_joinNow_development',
        },
        hashScrect: {
            pwd: ''
        }
    },

    test: {
        root: rootPath,
        app: {
            name: 'joinNow'
        },
        port: 3000,
        database: 'node-joinNow-test',
        username: 'node_joinNow',
        password: 'pass_joinNow',
        db: 'mongodb://localhost/node_joinNow_test',
        dbconfig: {
            db: 'mongodb://localhost/node_joinNow_test',
        },
        hashScrect: {
            pwd: ''
        }
    },

    production: {
        root: rootPath,
        app: {
            name: 'joinNow'
        },
        port: 3000,
        database: 'node-joinNow-production',
        username: 'node_joinNow',
        password: 'pass_joinNow',
        db: 'mongodb://localhost/node_joinNow_production',
        dbconfig: {
            db: 'mongodb://localhost/node_joinNow_production',
        },
        hashScrect: {
            pwd: ''
        }
    }
};


module.exports = _.merge(config[env], localConfig);
