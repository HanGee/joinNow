var _ = require('lodash');
var db = require('../../models');

module.exports = function(req, res, next){
    //
    var data = _.pick(req.body, [
        'title',
        'content'
    ]);

    data.UserId = req.user.id;

    db.Article.create(data).complete(function(err, article){
        res.redirect('/articles/'+ article.id);
    });
};
