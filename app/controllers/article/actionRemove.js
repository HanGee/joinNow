var db = require('../../models');

module.exports = function (req, res, next) {
    var userId = req.user._id;



    db.Article
        .findById(req.params.id)
        .exec(function (err, article) {

            /*
            * TODO 這個比較超髒的XD 拜託看到的人順手改掉
            */
            if (''+article.author !== ''+userId) {
                req.flash('error', '刪除失敗');
                res.redirect('/articles');
                return;
            }

            article.trashed= true;
            article.save(function (err, doc) {
                if (err) {
                    console.log(err.message);
                    console.log(err.stack);

                    req.flash('error', '刪除失敗');
                    res.redirect('/articles');
                    return;
                }
                req.flash('info', '刪除成功');
                res.redirect('/articles');
            });
        });

};
