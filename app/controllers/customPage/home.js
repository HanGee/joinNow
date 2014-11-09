var db = require('../../models');

module.exports = function (req, res, next) {

    db.Article.findAll().complete(function (err, articles) {
        res.render('index', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });

};
