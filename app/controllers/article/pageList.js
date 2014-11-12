var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article.findAll({
        where: {
            trashed: false
        },
        include: [{
            model: db.User,
            as: 'author',
            attributes: ['id', 'email']
        }]
    }).complete(function (err, articles) {

        console.log(articles);

        res.render('article/list', {
            articles: articles
        });
    });
};