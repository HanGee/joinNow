var _ = require('lodash');
var db = require('../../models');

/*
 * 預防 xss 方案
 * 兩個方案的實作看起來不太一樣，暫時選第二個因為是參考 google-caja
 */
//var xss = require('xss');
var sanitizer = require('sanitizer');


module.exports = function (req, res, next) {
    //
    var data = _.pick(req.body, [
        'title',
        'content'
    ]);

    data.UserId = req.user.id;
    data.content = sanitizer.sanitize(data.content);

    db.Article
        .create(data)
        .complete(function (err, article) {
            res.redirect('/articles/' + article.id);
        });
};
