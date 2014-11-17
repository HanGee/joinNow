var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article
        .findById(req.params.id)
        .populate('author members')
        .exec(function (err, doc) {

            if (err){
                return next(err);
            }
            if (!doc){
                return res.status(404).send('404');
            }

            res.render('article/show', {
                article: doc
            });
        });

};
