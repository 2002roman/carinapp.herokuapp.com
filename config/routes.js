var access = require('../app/controllers/access');
var user = require('../app/controllers/user')

module.exports = function (app, passport) {
    app.post('/login',passport.authenticate('local-login',{}),access.authenticate)
    app.post('/regin',passport.authenticate('local-signup',{}),access.authenticate)

    app.get('/facebook',passport.authenticate('facebook'))
    app.get('/facebook/callback',passport.authenticate('facebook',{}),access.facebookC)
    app.get('/user/projects',user.getAllProjects)
    app.post('/user/createProject',user.createProject)
    app.put('/user/editProject',user.editProject)
    app.put('/user/setStatus',user.setStatus)
    app.delete('/user/deleteProject',user.deleteProject)
    
    app.get('/verify',access.verify)
    app.get('/logout',access.logout)
}
