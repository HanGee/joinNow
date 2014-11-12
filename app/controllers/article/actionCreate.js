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

    data.content = sanitizer.sanitize(data.content);

    db.Article
        .create(data)
        .then(function (article) {

            article.setAuthor(req.user).on('success', function() {
                article.getAuthor().on('success', function(author) {
                    console.log('author', author.email);
                    console.log('Author: ', article.Author);
                })
            });

            console.log('article', article);
            res.redirect('/articles');
        })
        .catch(function(err){
            res.send(err);
        });
};
