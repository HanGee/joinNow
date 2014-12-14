var db = require('../../models');
var request = require('request');
var config = require('../../../config/config');

module.exports = function (req, res, next) {
  // db.User
  //     .findById(req.user.id)
  //     .exec(function (err, user) {

  //         user.githubToken = undefined;

  //         user.save(function (err, doc) {
  //             if (err) {
  //                 console.log(err.message);
  //                 console.log(err.stack);

  //                 req.flash('error', '更新失敗');
  //                 res.redirect('/articles');
  //                 return;
  //             }
  //             req.flash('info', '更新成功');
  //             res.redirect('/articles/');
  //         });
  //     });  
  // return;

  var args = {
    form: {
      client_id: config.github.clientID,
      client_secret: config.github.clientSecret,
      code: req.query.code,
      redirect_uri: config.github.redirectUri
    }
  };
  console.log(args);

  request.post('https://github.com/login/oauth/access_token', args,function (error, response, body) {
      console.log(body) // 打印google首页
      // get github token
      var resAry = body.split('&');
      var accessToken = resAry[0].split('=');

      db.User
          .findById(req.user.id)
          .exec(function (err, user) {
              user.githubToken = accessToken[1];
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
  });
};
