var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article.findAll({
        where: {
            trashed: false
        },
        include: [db.User]
    }).complete(function (err, articles) {
        res.render('article/list', {
            articles: articles
        });
    });
};