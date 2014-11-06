var debug = require('debug')('nh2:middleware:passport');

var passport = require('passport');
var db = require('../models');

module.exports = function(app, config){
    app.use(passport.initialize());
    app.use(passport.session());


    /*
     * 序列化：將 id 存入 session
     */
    passport.serializeUser(function(user, done) {
        debug('serializeUser %j', user);
        return done(null, user.id);
    });


    /*
     * 反序列化：讀取 user
     */
    passport.deserializeUser(function(id, done) {

        db.User.find(id).success(function(user){
        //db.User.find(id).complete(function(err, user){
            if(!user){
                return done(new Error('登入失敗'));
            }
            return done(null, user);
        });
    });

    require('./strategies/local')(app, config);

};

