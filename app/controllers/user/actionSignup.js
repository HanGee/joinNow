var _ = require('lodash');
var crypto = require('crypto');

var config = require('../../../config/config');
var db = require('../../models');

module.exports = function (req, res, next) {

    if (req.body.password !== req.body.password_confirmation) {
        req.flash('error', '兩次密碼不一致!');
        res.redirect('/signup');
        return;
    }

    var data = _.pick(req.body, [
        'name',
        'email',
        'password'
    ]);

    data.email = data.email.trim().toLowerCase();
    data.password = crypto.createHash('sha1').update(data.password + config.hashScrect.pwd).digest('hex');
    data.gravatarHash = crypto.createHash('md5').update(data.email).digest('hex');

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

};
