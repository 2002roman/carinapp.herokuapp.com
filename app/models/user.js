const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class user{
	getUserUniqueD(typeAccess,token,successCallback,failedCallback){
		const con = new Pool(config.pgCon);
		var uniqueDataN = "id"
		if(typeAccess=="local") uniqueDataN = "username" 
		var query = "SELECT "+uniqueDataN+" FROM `users"+typeAccess+"` WHERE accesstoken='"+token+"'"
		con.query(query,function(err,result,fields){
			con.end()
			if(result[0]!==undefined) successCallback(err,result[0][uniqueDataN],fields)
			else failedCallback()
		})
	}
	getUserFiles(uniqueD,start,callback){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "SELECT * FROM `"+uniqueD+"-files` LIMIT "+start+",6"
		con.query(query,function(err,result,fields){
			con.end()
			callback(err,result,fields)
		})
	}
	insertImage(uniqueD,fileName,fileAddress){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query ="INSERT INTO `"+uniqueD+"-files`(`name`, `address`) VALUES ('"+fileName+"','"+fileAddress+"')"
		con.query(query)
		con.end()
	}
	removeImage(uniqueD,fileAddress){
		// const con = require('mysql').createConnection(config.mysqlCon)
		// con.connect()
		const con = new Pool(config.pgCon);
		var query = "DELETE FROM `"+uniqueD+"-files` WHERE address='"+fileAddress+"'"
		con.query(query)
		con.end()
	}
	getUserUniqueDataWithToken(typeAccess,token,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT uniqueData FROM users WHERE typeAccess='"+typeAccess+"' and token='"+token+"'"
		con.query(query,function(err,result){
			con.end()
			if(result.rowCount == 0) callback(null)
			else callback(result.rows[0].uniquedata)
		})
	}
	projects(cookies,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData)=>{
			const con = new Pool(config.pgCon);
			var query = "SELECT * FROM projects Where uniqueDataOfUser='"+uniqueData+"'"
			con.query(query,function(err,result){
				con.end()
				callback(result.rows)
			})	
		})
	}
	createProject(cookies,data,id,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData)=>{
			const con = new Pool(config.pgCon);
			var query = "INSERT INTO project(uniqueDataOfUser, id, projectName, status, projectData, configuration) VALUES ($1, $2, $3, $4, $5, $6)"
			var values = [ uniqueData, id, data.projectName, false, data ,{}];
			con.query(query,values)
			con.end()	
		})
	}
}

module.exports = new user()