var debug = require('debug')('nh2:middleware:passport');

var passport = require('passport');
var db = require('../models');

module.exports = function (app, config) {
    app.use(passport.initialize());
    app.use(passport.session());

    /*
     * 序列化：將 id 存入 session
     */
    passport.serializeUser(function (user, done) {
        debug('serializeUser %j', user);
        return done(null, user._id);
    });


    /*
     * 反序列化：讀取 user
     */
    passport.deserializeUser(function (id, done) {

        return db.User
            .findById(id)
            .exec(function(err, user){
                if (err || !user) {
                    return done(null, false, {message: '登入失敗.'});
                }
                done(null, user);
            });
    });
    // console.log(app);
    require('./strategies/local')(app, config);
    require('./strategies/github')(app, config);

};

