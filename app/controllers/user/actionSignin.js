var passport = require('passport');

module.exports = function (req, res, next) {

    return passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
};