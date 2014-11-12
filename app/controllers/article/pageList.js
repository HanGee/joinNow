var db = require('../../models');

module.exports = function (req, res, next) {

    return db.Article.find()
        .where('trashed', false)
        .populate('author member')
        .exec(function(err, docs){
            console.log(err, docs);

            res.render('article/list', {
                articles: docs
            });
        });

};
