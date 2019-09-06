const { Pool, Client } = require('pg')
const config = require('../../config/setting')

class user{
	getUserUniqueDataWithToken(typeAccess,token,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT uniqueData FROM users WHERE typeAccess='"+typeAccess+"' and token='"+token+"'"
		con.query(query,function(err,result){
			con.end()
			if(result.rowCount == 0){
				callback(null,{
					status:'error',
					error:'Not found user of this token, please access again'
				})
			}
			else callback(result.rows[0].uniquedata)
		})
	}
	projects(cookies,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon);
			var query = "SELECT * FROM projects Where uniqueDataOfUser='"+uniqueData+"'"
			con.query(query,function(err,result){
				con.end()
				callback(result.rows)
			})	
		})
	}
	editProject(cookies,data,id,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}	
		})
	}
	createProject(cookies,data,id,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon)
			var dataJson = JSON.stringify(data)
			var query = "INSERT INTO projects(uniqueDataOfUser, id, projectName, status, projectData) VALUES ($1, $2, $3, $4, $5)"
			var values = [ uniqueData, id, data[0].model, false, dataJson ];
			con.query(query,values)
			con.end()	
		})
	}
	deleteProject(cookies,data,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon);
			var query = "DELETE FROM projects WHERE uniqueDataOfUser='"+uniqueData+"' and id='"+data.id+"'"
			con.query(query,(err,res)=>{
				if(err){
					callback({
						status:'error',
						error:err
					})
				}else{
					callback({
						status:'done',
						data:data.id
					})
				}
			})
			con.end()
		})
	}
	setStatus(cookies,data,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon);
			var query = "UPDATE projects SET status='"+data.status+"' WHERE uniqueDataOfUser='"+uniqueData+"' and id='"+data.id+"'"
			con.query(query,(err,res)=>{
				if(err){
					callback({
						status:'error',
						error:err
					})
				}else{
					callback({
						status:'done',
						data:data.id
					})
				}
			})
			con.end()
		})
	}
}

module.exports = new user()