var debug = require('debug')('joinNow:middleware:passport:strategies');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

var config = require('../../../config/config');
var db = require('../../models');


module.exports = function (app, config) {

    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, function (email, password, done) {
        debug('嘗試登入 %s', email);
        debug('嘗試登入 %s', password);
        console.log('LocalStrategy', email, password);

        email = email.trim().toLowerCase();
        password = crypto.createHash('sha1').update(password + config.hashScrect.pwd).digest('hex');

        return db.User
            .findOne()
            .where('email', email)
            .where('password', password)
            .exec(function(err, user){
                if (err) {
                    return done(null, false, {message: '登入失敗.'});
                }
                if (!user) {
                    return done(null, false, {message: '請確認信箱和密碼正確.'});
                }
                done(null, user);
            });
    }));

};
