var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .find(req.params.id)
        .then(function (article) {
            return article.removeMembers(req.user);
        })
        .then(function (article) {
            return res.redirect('/articles/' + article.id);
        });
};
