const passport = require('passport')
const fs = require('fs')
const https = require('https')
// const http = require('http')
const config = require('./config/setting.js')
// const app = require('express')()
// var io = require('socket.io')(http);

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// server = https.createServer({
// 	cert : fs.readFileSync('config/https/certeficate.pem'),
// 	key : fs.readFileSync('config/https/privatekey.pem')
// }, app)

// require('./config/passport')(passport)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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
// app.get('/test',function(req,res){
// 	res.send('hello');
// 	console.log('okokokokokokok')
// })
// app.get('/public/:folderN/:fileN',(req,res)=>{
//     res.sendFile(__dirname+'/public/'+req.params.folderN+'/'+req.params.fileN)
// })

app.get('/controllRobot',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

// require('./config/routes.js')(app, passport)

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
