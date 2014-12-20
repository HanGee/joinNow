var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .findById(req.params.id)
        .exec(function (err, article) {

            if (article.author !== req.user._id){
                req.flash('error', '更新失敗, 請不要黑黑我，感謝 Big Big, m(_ _)m');
                return res.redirect('/articles' + req.params.id); 
            }
            article.title = req.body.title;
            article.content = req.body.content;
            article.githubUrl = req.body.githubUrl;
            article.hackpadUrl = req.body.hackpadUrl;

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
