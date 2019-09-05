const passport = require('passport')
const fs = require('fs')
const config = require('./config/setting.js')
const serveStatic = require("serve-static")
var app = require('express')()
const path = require('path')
var server = require('http').Server(app)
var io = require('socket.io')(server)

// require('./config/passport')(passport)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use(serveStatic(path.join(__dirname, '/app/views/dist')));
app.use(express.static(__dirname + '/public'));

// app.use(serveStatic(path(__dirname,'app/views/dist')));
// app.use(passport.initialize());
// app.use(passport.session())
app.use(require('morgan')('dev'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({limit : '500mb', extended: false }))
app.use(require('body-parser').json({limit : '500mb'}))
app.use(require('cors')(config.corsCon))
app.all('*',(req,res,next)=>{
	res.append('Access-Control-Allow-Headers', ['Origin, X-Requested-With, Content-Type, Accept'])
	next()
})

// require('./config/routes.js')(app, passport)

// app.get('/public/:folderN/:fileN',(req,res)=>{
//     res.sendFile(__dirname+'/public/'+req.params.folderN+'/'+req.params.fileN)
// })

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

var port = process.env.PORT || 3000;
server.listen(port,()=>{
	console.log('Server started in port '+port)
})
