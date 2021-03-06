var path = require('path'),
    _ = require('lodash'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var debug = require('debug')('joinNow:config');
var debugDB = require('debug')('joinNow:db:query');

function customDbLogger(){
    return debugDB.apply(null, arguments);
}

var config = {
    development: {
        root: rootPath,
        github: {
            clientID: '5e3364a9b7a6162f3bff',
            clientSecret: '182eb05b7410f09ea8c1c86ea9491fbed04a3a90',
            callbackURL: 'http://127.0.0.1:3000/auth/github-callback',
            redirectUri: 'http://127.0.0.1:3000/'
        },
        app: {
            name: 'HanGee joinNow'
        },
        port: 3000,
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
        github: {
            clientID: '0846b7eed362c8a51b37',
            clientSecret: '5e0142004acafd397cf553e31eee61a72f99e7c7',
            callbackURL: 'http://127.0.0.1:3000/auth/github-callback',
            redirectUri: 'http://127.0.0.1:3000/'
        },
        app: {
            name: 'HanGee joinNow'
        },
        port: 3000,
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
        github: {
            clientID: '0846b7eed362c8a51b37',
            clientSecret: '0c3136c417faacefb735df1aef5a2a0c20a09773',
            callbackURL: 'http://joinnow.hackathon.tw/auth/github-callback',
            redirectUri: 'http://joinnow.hackathon.tw/'
        },
        app: {
            name: 'HanGee joinNow'
        },
        port: process.env.JOINNOW_PORT || 3002,
        db: process.env.JOINNOW_DB || 'mongodb://localhost/node_joinNow_production',
        dbconfig: {
            db: 'mongodb://localhost/node_joinNow_production',
        },
        hashScrect: {
            pwd: process.env.JOINNOW_SCRECT_PWD || ''
        }
    }
};


module.exports = config[env];
