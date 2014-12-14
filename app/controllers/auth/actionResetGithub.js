var db = require('../../models');
var passport = require('passport');

module.exports = function (req, res, next) {
  db.User
      .findById(req.user.id)
      .exec(function (err, user) {

          user.githubToken = undefined;

          user.save(function (err, doc) {
              if (err) {
                  console.log(err.message);
                  console.log(err.stack);

                  req.flash('error', '更新失敗');
                  res.redirect('/articles');
                  return;
              }
              req.flash('info', '更新成功');
              res.redirect('/articles/');
          });
      });  
};