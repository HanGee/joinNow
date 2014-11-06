var db = require('../../models');

module.exports = function(req, res, next){

    //var errorMessage = req.flash('error');
    res.render('user/signin', {
        //errorMessage: errorMessage,
        a: ''
    });
};