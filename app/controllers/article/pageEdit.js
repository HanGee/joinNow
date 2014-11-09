var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .find(req.params.id)
        .complete(function (err, article) {
            res.render('article/edit', {
                article: article
            });
        });
};
