var db = require('../../models');

module.exports = function (req, res, next) {

    db.User
        .findById(req.params.id)
        .exec(function (err, doc) {

            if (err){
                return next(err);
            }
            if (!doc){
                return res.status(404).send('404');
            }

            res.render('user/show', {
                user: doc
            });
        });

};
