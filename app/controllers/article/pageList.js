var db = require('../../models');

module.exports = function (req, res, next) {

    return db.Article.find()
        .where('trashed', false)
        .populate('author members')
        .exec(function(err, docs){

            res.render('article/list', {
                articles: docs
            });
        });

};
