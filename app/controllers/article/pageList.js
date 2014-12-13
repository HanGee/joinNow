var db = require('../../models');

module.exports = function (req, res, next) {
	var token = true;
	if(req.user != undefined) {
		if(req.user.githubToken == undefined) {
			token = false;
	    }
	}

    return db.Article.find()
        .where('trashed', false)
        .populate('author members')
        .exec(function(err, docs){

            res.render('article/list', {
                articles: docs,
                token: token
            });
        });

};
