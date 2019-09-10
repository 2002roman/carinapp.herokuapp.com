const passport = require('passport')
const fs = require('fs')
const config = require('./config/setting.js')
const serveStatic = require("serve-static")
var app = require('express')()
const path = require('path')
var server = require('http').Server(app)
var io = require('socket.io')(server)
require('express-group-routes')
// var ioTest = require('socket.io')('/test');
// ioTest.on('connection', function(socket){
// console.log('testSOcket is active')	
//   socket.on('test', function(msg){
//     console.log('test:',msg)
//   });
// });
// console.log(ioTest)

//passport.js
require('./config/passport')(passport)

//vue.js front
app.use(serveStatic(path.join(__dirname, '/dist')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session())
app.use(require('morgan')('dev'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({limit : '500mb', extended: false }))
app.use(require('body-parser').json({limit : '500mb'}))
app.use(require('cors')(config.corsCon))
app.all('*',(req,res,next)=>{
	res.append('Access-Control-Allow-Headers', ['Origin, X-Requested-With, Content-Type, Accept'])
	next()
})

//API rout
var serverApiRouter = require('express').Router();
require('./config/routes.js')(serverApiRouter, passport)
app.use('/api',serverApiRouter)

//socket.io
require('./config/socketIo.js')(io)

//public folder for front
app.get('/public/:folderN/:fileN',(req,res)=>{
    res.sendFile(__dirname+'/public/'+req.params.folderN+'/'+req.params.fileN)
})

var port = process.env.PORT || 3000;
server.listen(port,()=>{
	console.log('Server started in port '+port)
})
