var db = require('../../models');

module.exports = function (req, res, next) {

    res.render('index', {
        title: 'Generator-Express MVC'
    });

};
