var debug = require('debug')('joinNow:express');
var express = require('express');
var glob = require('glob');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var passport = require('passport');
var session = require('cookie-session');
var flash = require('connect-flash');
var swig = require('swig');
var extras = require('swig-extras');

module.exports = function (app, config) {

    debug('express init');

    app.engine('swig', swig.renderFile);
    app.set('view engine', 'swig');
    app.set('views', config.root + '/app/views');
    app.set('view cache', false);
    swig.setDefaults({cache: false});
    extras.useFilter(swig, 'markdown');
    extras.useTag(swig, 'markdown');

    // app.use(favicon(config.root + '/public/img/favicon.ico'));
    app.use(express.static(config.root + '/public'));

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compress());
    app.use(session({
        keys: ['key1', 'key2'],
        //secureProxy: true // if you do SSL outside of node
    }));
    app.use(flash());
    app.use(methodOverride());

    app.locals.title = config.app.name;


    require('../app/middlewares/passport')(app, config);


    app.use(function (req, res, next) {

        console.log('\n\n--------------------');
        console.log(req.method, req.url);
        console.log('req.query', req.query);
        console.log('req.body', req.body);
        console.log('req.user', req.user && req.user.email);


        res.locals.user = req.user;
        res.locals.flashInfo = req.flash('info') || false;
        res.locals.flashError = req.flash('error') || false;
        res.locals.authenticated = !!req.user;

        if (req.user) {
            res.locals.userId = req.user.id;
        }
        next();
    });

    require('../app/express_router')(app, config);


    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;

        res.render('404', {
            message: err.message,
            error: err,
            title: '404 NOT FOUND'
        });
    });

    if (app.get('env') === 'development') {
        app.use(function (err, req, res) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    }

    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
            title: 'error'
        });
    });

};
