
module.exports = function (req, res, next) {

    res.render('user/signup', {
        errorMessage: req.flash('error'),
    });

};
