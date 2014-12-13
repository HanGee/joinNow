var db = require('../../models');
var GitHubApi = require("github");
var _ = require("lodash");

module.exports = function (req, res, next) {
	console.log(req.user.githubToken);

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
    
	var gitRepos = [];
    if(req.user.githubToken != undefined) {
		github.authenticate({
		    type: "oauth",
		    token: req.user.githubToken
		});

	    github.repos.getAll({}, function(err, githubRes) {
			_.forEach(githubRes, function(val, key) {
				gitRepos.push({
					name: val.name,
					value: val.full_name
				});
				// console.log(JSON.stringify(val.name) + '-' + JSON.stringify(val.full_name)); 
			});
	        console.log(JSON.stringify(gitRepos));

		    res.render('article/new',{
		    	gitRepos: gitRepos
		    });
	    });
    } else {
	    res.render('article/new',{
	    	gitRepos: gitRepos
	    });
    }

};
