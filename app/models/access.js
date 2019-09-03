// const mysql = require('mysql')
const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class access{
	getUserHash(username,successCallback,failedCallback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		const con = new Pool(config.pgCon);
		//con.connect()
		var query = "SELECT * FROM users WHERE typeAccess='local' and uniqueData='"+username+"'"
		con.query(query,(err,res)=>{
			if(res.rowCount!==0) return successCallback(res[0].password)
			else failedCallback()
			//console.log(res,err)
		})
		con.end()
	}
	checkUser(username,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE type='local' uniqueData='"+username+"'"
		con.query(query,(err,res)=>{
			console.log('err:',err)
			console.log('res:',res)
			callback(res.rowCount==0)
		}) 
		con.end()
	}
	signupUser(username,token,hash,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "INSERT INTO users(uniqueData, password, token,typeAccess,typeAccess) VALUES ('"+username+"','"+hash+"','"+token+"','local')"
		//con.query(query)
		// con.query("CREATE TABLE `"+username+"-files` (name VARCHAR(255), address VARCHAR(255))")
		// con.end()
		conosle.log(query)
		callback(token)
	}
	findOrCreate(user,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='facebook' and uniqueData='"+user.id+"'"
		con.query(query,(err,result)=>{
			if(result.rowCount==0){
				query = "INSERT INTO users(uniqueData, name, token,typeAccess) VALUES ('"+user.id+"','"+user.displayName+"','"+user.accessToken+"','facebook')"
				con.query(query)
				// con.query("CREATE TABLE `"+user.id+"-files` (name VARCHAR(255), address VARCHAR(255))")
				callback()
				con.end()
				console.log('query:',query)
			}else{
				query = "UPDATE users SET token='"+user.accessToken+"' WHERE uniqueData='"+user.id+"' and typeAccess='facebook'"
				con.query(query)
				con.end()
				console.log('query:',query)
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