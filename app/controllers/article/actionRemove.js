var db = require('../../models');

module.exports = function (req, res, next) {
    var userId = req.user._id;



    db.Article
        .findById(req.params.id)
        .exec(function (err, article) {
            if (article.author !== userId) {
                return next(new Error('YOU_CAN_NOT_DELETE'));
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
