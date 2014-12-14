var express = require('express');
var glob = require('glob');
var router = express.Router();

module.exports = function (app, config) {

    var Ctrl = {};

    var controllers = glob.sync(config.root + '/app/controllers/**/*.js');
    controllers.forEach(function (controller) {

        var paths = controller.split(/\/|\./);
        if (paths.pop() === 'js') {
            var method = paths.pop();
            var ctrlName = paths.pop();
            Ctrl[ctrlName] = Ctrl[ctrlName] || {};
            Ctrl[ctrlName][method] = require(controller);
        }
        return;
    });

    console.log('controller 自動讀取 ok');


    /*------------------------------------------
     *
     * Param 定義區塊
     *
     * ------------------------------------------ */
    //router.param('id', function (req, res, next, id) {
    //    if (/^\d+$/.test(id)) {
    //        return next();
    //    }
    //    next(new Error('bad id'));
    //});

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error', '請先登入');
        res.redirect("/signin");
        return;
    };


    /*------------------------------------------
     *
     * Router 定義區塊
     *
     * TODO 我的密碼沒加密 QQQQQQQ
     * ------------------------------------------ */
    router.route('/')
        .get(Ctrl.customPage.home);

    router.route('/signin')
        .get(Ctrl.user.pageSignin)
        .post(Ctrl.user.actionSignin);

    router.route('/signup')
        .get(Ctrl.user.pageSignup)
        .post(Ctrl.user.actionSignup);

    router.route('/me')
        .get(Ctrl.user.pageMe);

    router.route('/logout')
        .get(Ctrl.user.actionLogout);

    router.route('/users/:id')
        .get(Ctrl.user.pageShow);

    router.route('/articles')
        .get(Ctrl.article.pageList)
        .post(Ctrl.article.actionCreate);

    router.route('/articles/new')
        .get(ensureAuthenticated, Ctrl.article.pageNew)
        .post(ensureAuthenticated, Ctrl.article.actionCreate);

    router.route('/articles/edit')
        .get(Ctrl.article.pageEdit);

    router.route('/articles/:id/members/:memberId/remove')
        .get(Ctrl.article.actionMemberRemove);

    router.route('/articles/:id')
        .get(Ctrl.article.pageShow)
        .post(ensureAuthenticated, Ctrl.article.actionUpdate)
        .delete(ensureAuthenticated, Ctrl.article.actionRemove);

    router.route('/articles/:id/join')
        .get(ensureAuthenticated, Ctrl.article.pageJoin);

    router.route('/articles/:id/unjoin')
        .get(ensureAuthenticated, Ctrl.article.pageUnJoin);

    router.route('/articles/:id/remove')
        .get(ensureAuthenticated, Ctrl.article.actionRemove);

    router.route('/articles/:id/edit')
        .get(ensureAuthenticated, Ctrl.article.pageEdit)
        .post(ensureAuthenticated, Ctrl.article.actionUpdate);

    router.route('/auth/github')
        .get(ensureAuthenticated, Ctrl.auth.actionGithub);

    router.route('/auth/github-callback')
        .get(ensureAuthenticated, Ctrl.auth.actionGithubCallback);
        
    app.use('/', router);
};
