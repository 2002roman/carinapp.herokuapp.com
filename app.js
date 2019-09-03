// const passport = require('passport')
// const fs = require('fs')
// const https = require('https')
// const http = require('http')
// const config = require('./config/setting.js')
// const app = require('express')()

// // server = https.createServer({
// // 	cert : fs.readFileSync('config/https/certeficate.pem'),
// // 	key : fs.readFileSync('config/https/privatekey.pem')
// // }, app)

// require('./config/passport')(passport)

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.use(passport.initialize());
// app.use(passport.session())
// app.use(require('morgan')('dev'))
// app.use(require('cookie-parser')())
// app.use(require('body-parser').urlencoded({limit : '500mb', extended: false }))
// app.use(require('body-parser').json({limit : '500mb'}))
// app.use(require('cors')(config.corsCon))
// app.all('*',(req,res,next)=>{
// 	res.append('Access-Control-Allow-Headers', ['Origin, X-Requested-With, Content-Type, Accept'])
// 	next()
// })
// app.get('/test',function(req,res){
// 	res.send('hello');
// 	console.log('okokokokokokok')
// })
// app.get('/public/:folderN/:fileN',(req,res)=>{
//     res.sendFile(__dirname+'/public/'+req.params.folderN+'/'+req.params.fileN)
// })
// require('./config/routes.js')(app, passport)

// var port = process.env.PORT || 3000;
// app.listen(port,()=>{
// 	console.log('Server started in port '+port)
// })
var pgCon = {
    'user' : 'aoarpgboekmezt',
    'host' : 'ec2-23-21-148-223.compute-1.amazonaws.com',
    'database' : 'db1koekpfjahur',
    'password' : '0199b9b831c2d2ce5b7cd4404e358ffa23009a61993904586b512d45f8c92692',
    'port' : 5432
};
const { Pool, Client } = require('pg')
const con = new Pool(pgCon);
console.log(con)
query = "INSERT INTO users(uniqueData, name, token,typeAccess) VALUES ('"+'user.id'+"','"+'user.displayName'+"','"+'jjhjhbjhhb'+"','facebook')"
con.query(query,function(res,err) {
	console.log('res',res)
	console.log('err',err)
})
query = "select * from users"
con.query(query,function(res,err) {
	console.log('res',res)
	console.log('err',err)
})