var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'joinNow'
        },
        port: 3000,
        database: 'node-joinNow-development',
        username: 'root',
        password: 'root',
        dbconfig: {
            dialect: 'mysql',
            host: 'localhost',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci'
            },
            logging: console.log
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
        dbconfig: {
            dialect: 'mysql',
            host: 'localhost',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci'
            },
            logging: console.log
        }
    },

    production: {
        root: rootPath,
        app: {
            name: 'joinNow'
        },
        port: 3000,
        database: 'node-joinNow-test',
        username: 'node_joinNow',
        password: 'pass_joinNow',
        dbconfig: {
            dialect: 'mysql',
            host: 'localhost',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci'
            },
            logging: false
        }
    }
};

module.exports = config[env];
