var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    var conditions = {
        _id: req.params.id,
        author: req.user.id
    };

    db.Article
        .findOneAndUpdate(conditions, {
            $pull: {
                members: req.params.memberId
            }
        })
        .exec(function (err, doc) {

            if (err || !doc) {
                console.log(err&&err.message);
                console.log(err&&err.stack);

                req.flash('error', '移除失敗');
                res.redirect('/articles/' + req.params.id);
                return;
            }

            req.flash('info', '移除成功');
            res.redirect('/articles/' + doc._id);
        });
};
