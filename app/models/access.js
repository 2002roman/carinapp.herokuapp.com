// const mysql = require('mysql')
const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class access{
	getUserHash(username,successCallback,failedCallback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		const con = new Pool(config.pgCon);
		//con.connect()
		var query = "SELECT * FROM `users` WHERE type='local' and username='"+username+"'"
		con.query(query,(err,res)=>{
			if(res[0]!==undefined) return successCallback(res[0].password)
			else failedCallback()
		})
		con.end()
	}
	checkUser(username,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM `users` WHERE type='local' username='"+username+"'"
		con.query(query,(err,res)=>{
			callback(res[0]!==undefined)
		}) 
		con.end()
	}
	signupUser(username,token,hash,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "INSERT INTO `users`(`uniqueData`, `password`, `token`,`typeAccess`,`typeAccess`) VALUES ('"+username+"','"+hash+"','"+token+"','local')"
		con.query(query)
		// con.query("CREATE TABLE `"+username+"-files` (name VARCHAR(255), address VARCHAR(255))")
		con.end()
		callback(token)
	}
	findOrCreate(user,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
        console.log('model facebook start')
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='facebook' and uniqueData='"+user.id+"'"
		con.query(query,(err,result)=>{
        	console.log('res:',result)
        	console.log('err:',err)
        	console.log('query:',query)
			if(result.rowCount==0){
				con.query("INSERT INTO users(uniqueData, name, token,typeAccess) VALUES ('"+user.id+"','"+user.displayName+"','"+user.accessToken+"','facebook')")
				// con.query("CREATE TABLE `"+user.id+"-files` (name VARCHAR(255), address VARCHAR(255))")
				callback()
				con.end()
			}else{
				con.query("UPDATE users SET token='"+user.accessToken+"' WHERE uniqueData='"+user.id+"' and typeAccess='facebook'")
				con.end()
			}
		})
	}
	updateAccessToken(username,token){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		con.query("UPDATE `userslocal` SET `accesstoken`='"+token+"' WHERE username='"+username+"'")
		con.end()
	}
}

module.exports = new access()