var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    if (req.body.password !== req.body.password_confirmation) {
        req.flash('error', '兩次密碼不一致!');
        res.redirect('/signup');
        return;
    }

    var data = _.pick(req.body, [
        'email',
        'password'
    ]);

    db.User.create(data).complete(function (err, user) {
        if (err) {
            console.log('error', err);
            req.flash('error', err);
            res.redirect('/signup');
            return;
        }
        res.redirect('/me');
    });
};
