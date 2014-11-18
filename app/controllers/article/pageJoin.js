var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {

    /**
    * work around
    * 這裏很髒的限定組隊人數不能超過5人
    *
    * TODO 找出更靈活的解法
    */
    var conditions = {
        _id: req.params.id,
        $where: 'this.members.length < 6'
    };

    db.Article
        .findOneAndUpdate(conditions, {
            $addToSet: {
                members: req.user._id
            }
        })
        .exec(function (err, doc) {

            if (err || !doc) {
                console.log(err&&err.message);
                console.log(err&&err.stack);

                req.flash('error', '加入失敗');
                res.redirect('/articles/' + req.params.id);
                return;
            }
            req.flash('info', '加入成功');
            res.redirect('/articles/' + doc._id);
        });
};
