var db = require('../../models');

module.exports = function (req, res, next) {

    var data = _.pick(req.body, [
        'title',
        'content'
    ]);

    db.Article
        .find(req.params.id)
        .updateAttributes(data)
        .complete(function (err, article) {
            res.redirect('/articles/' + article.id);
        });

};