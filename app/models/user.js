const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class user{
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
			const con = new Pool(config.pgCon)
			var dataJson = JSON.stringify(data)
			var query = "INSERT INTO projects(uniqueDataOfUser, id, projectName, status, projectData) VALUES ($1, $2, $3, $4, $5)"
			var values = [ uniqueData, id, data[0].model, false, dataJson ];
			con.query(query,values)
			con.end()	
		})
	}
	editProject(cookies,data,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData)=>{
			const con = new Pool(config.pgCon)
			var dataJson = JSON.stringify(data)
			var query = "UPDATE projects set "
			for (var property of data) {
				query += property.name+'='+property.model+' ,'
			}
			console.log(query)
			con.query(query)
			con.end()	
		})
	}
}

module.exports = new user()