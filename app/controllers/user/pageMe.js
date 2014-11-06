var db = require('../../models');

module.exports = function(req, res, next) {

    res.render('user/me', {
        user: req.user
    });

};
