var _ = require('lodash');
var crypto = require('crypto');

var config = require('../../../config/config');
var db = require('../../models');

var GitHubApi = require("github");

module.exports = function (req, res, next) {

    db.User
    .findOne()
    .where('name', req.body.name)
    .exec(function(err, user){
        if (err) {
            return done(null, false, {message: '註冊失敗.'});
        }
        if (user) {
            req.flash('error', '帳號已存在!');
            res.redirect('/signup');
            return;
        }

        // 定義
        var github = new GitHubApi({
            // required
            version: "3.0.0",
            // optional
            debug: true,
            protocol: "https",
            host: "api.github.com",
            // pathPrefix: "/api/v3", // for some GHEs
            timeout: 5000,
        });

        // 驗證
        github.authenticate({
            type: "basic",
            username: req.body.name,
            password: req.body.password
        });

        // 2.Create authorization get token
        github.authorization.create({
            scopes: ["gist", "repo", "user"],
            note: "Hangee JoinNow",
        }, function(githubErr, githubRes) {
            if(githubRes == undefined) {
                req.flash('error', 'Github 驗證失敗!');
                res.redirect('/signup');
                return;
            } else {
                var token = githubRes.token;
                console.log(githubRes);

                var data = _.pick(req.body, [
                    'name',
                    'email',
                    'password',
                    'githubToken'
                ]);

                data.email = data.email.trim().toLowerCase();
                data.password = crypto.createHash('sha1').update(data.password + config.hashScrect.pwd).digest('hex');
                data.gravatarHash = crypto.createHash('md5').update(data.email).digest('hex');
                data.githubToken = token;

                return db.User
                    .create(data, function(err, doc){
                        if (err) {
                            console.log('error', err);
                            req.flash('error', err);
                            res.redirect('/signup');
                            return;
                        }
                        res.redirect('/me');
                    });
            }
        });
    });
};
