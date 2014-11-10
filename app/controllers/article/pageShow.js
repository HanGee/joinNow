var xss = require('xss');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .find({
            where: {id: req.params.id},
            include: [{
                model: db.User,
                attributes: ['id', 'email']
            }, db.Comment
            ]
        })
        .complete(function (err, article) {
            console.log(JSON.stringify(article));

            article.content = xss(article.content);

            res.render('article/show', {
                article: article
            });
        });
};