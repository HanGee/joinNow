var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    var data = _.pick(req.body, [
        'title',
        'content'
    ]);

    db.Article
        .find(req.params.id)
        .then(function (article) {
            return article.updateAttributes(data);
        })
        .then(function (article) {
            return res.redirect('/articles/' + article.id);
        });
};
