
var passport = require('passport');
var db = require('../../models');

module.exports = function(req, res, next){

    return passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
};