var access = require('../app/controllers/access')
var user = require('../app/controllers/user')
var download = require('../app/controllers/download')

module.exports = function (app, passport) {
    app.post('/login',passport.authenticate('local-login',{}),access.authenticate)
    app.post('/regin',passport.authenticate('local-signup',{}),access.authenticate)

    app.get('/facebook',passport.authenticate('facebook'))
    app.get('/facebook/callback',passport.authenticate('facebook',{}),access.facebookC)
    app.get('/user/projects',user.getAllProjects)
    app.get('/user/project/:id',user.getProject)
    app.get('/user/downloadProject/:id',user.downloadProject)
    app.post('/user/createProject',user.createProject)
    app.put('/user/editProject',user.editProject)
    app.get('/user/getCookies',(req,res)=>{
        res.send(req.cookies)
    })
    app.delete('/user/deleteProject/:id',user.deleteProject)

    app.get('/verify',access.verify)
    app.get('/logout',access.logout)
    app.get('/download/robotZip',download.robotZip)
}
