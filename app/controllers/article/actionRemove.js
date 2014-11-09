var db = require('../../models');

module.exports = function (req, res, next) {
    var userId = req.user.id;

    db.Article
        .find({
            where: {
                id: req.params.id,
                UserId: userId,
                trashed: false
            }
        })
        .then(function (article) {
            if (!article) {
                throw new Error('CAN_NOT_FOUND');
            }
            if (article.UserId !== userId) {
                throw new Error('YOU_CAN_NOT_DELETE')
            }

            return article.updateAttributes({
                trashed: true
            });
        })
        .then(function (article) {
            req.flash('info', '刪除成功');
            res.redirect('/articles');
        })
        .catch(function (err) {
            console.log(err.message);
            console.log(err.stack);

            req.flash('error', '刪除失敗');
            res.redirect('/articles');
        });

};