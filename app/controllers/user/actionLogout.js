
module.exports = function (req, res, next) {
    req.logout();
    req.session = {};
    res.redirect('/');
};
