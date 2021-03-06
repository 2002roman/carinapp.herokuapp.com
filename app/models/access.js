const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class access{
	getUserHash(username,successCallback,failedCallback){
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='local' and uniqueData='"+username+"'"
		con.query(query,(err,res)=>{
			if(res.rowCount!==0) return successCallback(res.rows[0].password)
			else failedCallback()
		})
		con.end()
	}
	checkUser(username,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='local' and uniqueData='"+username+"'"
		con.query(query,(err,res)=>{
			callback(res.rowCount!==0)
		}) 
		con.end()
	}
	signupUser(username,token,hash,callback){
		const con = new Pool(config.pgCon);
		var query = "INSERT INTO users(uniqueData, password, token, typeAccess) VALUES ($1, $2, $3, $4)"
		var values = [ username, hash, token, 'local' ];
		con.query(query,values)
		con.end()
		callback(token)
	}
	findOrCreate(user,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM users WHERE typeAccess='facebook' and uniqueData='"+user.id+"'"
		con.query(query,(err,result)=>{
			con.end();
			if(result.rowCount==0){
				const con = new Pool(config.pgCon);
				var query = "INSERT INTO users(uniqueData, token, typeAccess) VALUES ($1, $2, $3)"
				var values  = [ user.id, user.accessToken, 'facebook' ]
				con.query(query,values)
				con.end()
				callback()
			}else{
				const con = new Pool(config.pgCon);
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