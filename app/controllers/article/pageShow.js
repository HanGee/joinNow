var xss = require('xss');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .find({
            where: {id: req.params.id},
            include: [{
                model: db.User,
                as: 'author',
                attributes: ['id', 'email']
            }]
        })
        .complete(function (err, article) {
            console.log('err', err);
            console.log('article', article.values);

            article.content = xss(article.content);

            res.render('article/show', {
                article: article
            });
        });
};