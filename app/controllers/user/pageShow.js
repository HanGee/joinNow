var db = require('../../models');
var _ = require('lodash');

module.exports = function (req, res, next) {
    console.log(req.params.id);
    db.User
        .findById(req.params.id)
        .exec(function (err, doc) {
            if (err){
                return next(err);
            }
            if (!doc){
                return res.status(404).send('404');
            }

            // 取得使用者參加的活動
            var query = db.Article.find().where('trashed', false);    
            var userArticles = [];
            query.exec(function (err, articles) {
                _.find(articles, function(article) {
                    // 隊長
                    if(article.author == req.params.id) {
                        userArticles.push({
                            id: article._id.toString(),
                            title: article.title,
                            content: article.content,
                        });                            
                    }
                    _.find(article.members, function(member) {
                        // 隊員
                        if(member == req.params.id) {
                            userArticles.push({
                                id: article._id.toString(),
                                title: article.title,
                                content: article.content,
                            });
                        }
                    });
                });
                // console.log(userArticles);
                res.render('user/show', {
                    user: doc,
                    articles: userArticles
                });
            });
        });

};
