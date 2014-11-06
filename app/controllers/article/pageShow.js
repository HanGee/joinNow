var db = require('../../models');

module.exports = function(req, res, next){

    db.Article
        .find({
            where: { id: req.params.id},
            include: [db.User]
        })
        .complete(function(err, article){
            console.log(JSON.stringify(article));
            res.render('article/show', {
                article: article
            });
        });
};