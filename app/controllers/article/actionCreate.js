var _ = require('lodash');
var db = require('../../models');

module.exports = function (req, res, next) {
    //
    var data = _.pick(req.body, [
        'title',
        'content',
        'githubUrl',
        'hackpanUrl',
    ]);

    data.author = req.user._id;

    return db.Article
        .create(data)
        .then(function (doc){
            res.redirect('/articles/' + doc._id);

        }, function (err){
            req.flash('error', '建立失敗');
            res.redirect('/articles');
            return;
        });


};
