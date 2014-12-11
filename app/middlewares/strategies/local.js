var debug = require('debug')('nh2:middleware:passport:strategies');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

var config = require('../../../config/config');
var db = require('../../models');

var GitHubApi = require("github");

module.exports = function (app, config) {

    passport.use(new LocalStrategy({
        usernameField: 'name'
    }, function (name, password, done) {
        debug('嘗試登入 %s', name);
        debug('嘗試登入 %s', password);
        console.log('LocalStrategy', name, password);

        // 定義
        var github = new GitHubApi({
            // required
            version: "3.0.0",
            // optional
            debug: true,
            protocol: "https",
            host: "api.github.com",
            timeout: 5000,
        });
        
        github.authenticate({
            type: "basic",
            username: name,
            password: password
        });

        // github.authorization.get({
        // }, function(err, res) {
        //     console.log(JSON.stringify(res));
        // });

        // password = crypto.createHash('sha1').update(password + config.hashScrect.pwd).digest('hex');

        return db.User
            .findOne()
            .where('name', name)
            .exec(function(err, user){
                if (err) {
                    return done(null, false, {message: '登入失敗.'});
                }
                if (!user) {
                    return done(null, false, {message: '請確認帳號正確.'});
                }

                if(user.githubToken) {
                    github.authorization.getAll({
                        // user: name
                    }, function(err, res) {
                        console.log(JSON.stringify(res));
                        // Github 驗證未通過
                        if(res == undefined) {
                            return done(null, false, {message: '請確認密碼正確.'});
                        } else {
                            console.log(user);
                            done(null, user);
                        }
                    });
                } else {
                    return done(null, false, {message: '未驗證 Github Token.'});
                }
            });
    }));

};
