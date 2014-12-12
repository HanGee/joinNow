var db = require('../../models');
var GitHubApi = require("github");
var _ = require("lodash");

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

            // 定義
            var github = new GitHubApi({
                // required
                version: "3.0.0",
                // optional
                debug: true,
                protocol: "https",
                host: "api.github.com",
                timeout: 5000,
            });
            
            // 取得作者的 githubToken
            github.authenticate({
                type: "oauth",
                token: doc.author.githubToken
            });

            console.log('GithubUrl:' + doc.githubUrl + ' Token:' + doc.author.githubToken);
            var gethubUrl = doc.githubUrl.split("/");

            // 取得 Github Commit 紀錄
            github.repos.getCommits({
                user: gethubUrl[0],
                repo: gethubUrl[1]
            }, function(err, githubRes) {
                var gitCommits = [];
                _.forEach(githubRes, function(val, key) {
                    var date = new Date(val.commit.committer.date);
                    var dateYmd = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
                    var dateHis = date.getHours() + ':' + date.getMinutes() + ':' + date.getMilliseconds();

                    gitCommits.push({
                        message: val.commit.message,
                        committerName: val.commit.committer.name,
                        committerDate: dateYmd + ' ' + dateHis,
                        committerEmail: val.commit.committer.email
                    });
                });
                // console.log(JSON.stringify(doc.author));
                res.render('article/show', {
                    article: doc,
                    gitCommits: gitCommits
                });
            });
        });

};
