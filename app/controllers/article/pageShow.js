var xss = require('xss');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .find({
            where: {id: req.params.id},
            //include: [{
            //    model: db.User,
            //    as: 'Author',
            //    attributes: ['id', 'email']
            //},{
            //    model: db.User,
            //    as: 'Members',
            //    attributes: ['id', 'email']
            //}]
        })
        .complete(function (err, article) {
            console.log('err', err);
            console.log('article', article);

            if (!article){
                return res.status(404).send('404');
            }


            article.content = xss(article.content);

            res.render('article/show', {
                article: article
            });
        });
};
