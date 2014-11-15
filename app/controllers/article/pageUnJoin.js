var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    var conditions = { _id: req.params.id };

    db.Article
        .findOneAndUpdate(conditions, {
            $pull: {
                members: req.user._id
            }
        })
        .exec(function (err, doc) {

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
};
