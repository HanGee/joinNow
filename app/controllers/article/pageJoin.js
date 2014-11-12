var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .find(req.params.id)
        .then(function (article) {
            return article.addMembers(req.user);
        })
        .then(function (article) {
            console.log('article', article);
            return res.redirect('/articles');
        });
};
