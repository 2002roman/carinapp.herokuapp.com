const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class access{
	getUserHash(username,successCallback,failedCallback){
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='local' and uniqueData='"+username+"'"
		con.query(query,(err,res)=>{
			console.log(res.rowCount)
			if(res.rowCount!==0) return successCallback(res.rows[0].password)
			else failedCallback()
		})
		con.end()
	}
	checkUser(username,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='local' and uniqueData='"+username+"'"
		con.query(query,(err,res)=>{
			// console.log(res)
			callback(res.rowCount!==0)
		}) 
		con.end()
	}
	signupUser(username,token,hash,callback){
		const con = new Pool(config.pgCon);
		var query = "INSERT INTO users(uniqueData, password, token,typeAccess) VALUES ($1, $2, $3, $4)"
		var values = [ username, hash, token, 'local' ];
		con.query(query,values)
		con.end()
		callback(token)
	}
	findOrCreate(user,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='facebook' and uniqueData='"+user.id+"'"
		con.query(query,(err,result)=>{
			if(result.rowCount==0){
				var query = "INSERT INTO users(uniqueData, name, token, typeAccess) VALUES ($1, $2, $3, $4)"
				var values = [ user.id, user.displayName, user.accessToken, 'facebook' ]
				con.query(query,values,function(err,res){
					console.log(err,res)
				})
				console.log(query,values)
				con.end()
				callback()
			}else{
				var query = "UPDATE users SET token='"+user.accessToken+"' WHERE uniqueData='"+user.id+"' and typeAccess='facebook'"
				con.query(query)
				con.end()
			}
		})
	}
	updateAccessToken(username,token){
		const con = new Pool(config.pgCon);
		con.query("UPDATE users SET token='"+token+"' WHERE typeAccess='local' and uniqueData='"+username+"'")
		con.end()
	}
}

module.exports = new access()