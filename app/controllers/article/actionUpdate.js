var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .findById(req.params.id)
        .exec(function (err, article) {

            article.title = req.body.title;
            article.content = req.body.content;
            article.githubUrl = req.body.githubUrl;

            article.save(function (err, doc) {
                if (err) {
                    console.log(err.message);
                    console.log(err.stack);

                    req.flash('error', '更新失敗');
                    res.redirect('/articles' + req.params.id);
                    return;
                }
                req.flash('info', '更新成功');
                res.redirect('/articles/' + doc._id);
            });
        });

};
