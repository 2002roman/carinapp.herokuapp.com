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
	project(cookies,id,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon);
			var query = "SELECT * FROM projects Where uniqueDataOfUser='"+uniqueData+"' and id='"+id+"'"
			con.query(query,function(err,result){
				con.end()
				callback(result.rows)
			})	
		})
	}
	editProject(cookies,data,callback){
		this.getUserUniqueDataWithToken(cookies.typeAccess,cookies.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon);
			var dataJson = JSON.stringify(data.projectdata)
			var query = "UPDATE projects SET projectData='"+dataJson+"' Where uniqueDataOfUser='"+uniqueData+"' and id='"+data.id+"'"
			con.query(query,function(err,result){
				con.end()
				callback({
					status:'done',
					data:data.id
				})
			})	
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
			callback({status:'done'})
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
	checkProject(uniqueData,id,callback){
		const con = new Pool(config.pgCon);
		var query = "SELECT status,token_user,token_robot,id FROM projects WHERE uniqueDataOfUser='"+uniqueData+"' and id='"+id+"'"
		con.query(query,function(err,result){
			con.end()
			if(result.rowCount == 0){
				callback(null)
			}
			else callback(result.rows[0])
		})
	}
	getRobotData(data,callback){
		this.getUserUniqueDataWithToken(data.typeAccess,data.token,(uniqueData,err)=>{
			if(uniqueData==null){
				callback(err)
				return
			}
			const con = new Pool(config.pgCon);
			var query = "SELECT token_robot,status FROM projects WHERE uniqueDataOfUser='"+uniqueData+"' and id='"+data.id+"'"
			con.query(query,function(err,result){
				con.end()
				if(result.rowCount == 0){
					callback({
						status:'error',
						error:'Project of this id undefined'
					})
				}else if(!result.rows[0].status){
					callback({
						status:'error',
						error:'Robot is untill not connected'
					})
				}
				else callback({
					status:'done',
					token_robot:result.rows[0].token_robot})
			})
		})
	}
	setStatus(data,callback){	
		this.checkProject(data.uniqueDataOfUser,data.id,(res)=>{
			if(res == null){
				callback({
					status : 'error',
					error : 'Project not a found'
				})
			}else if(String(data.status)==String(res.status)){
				var errorWord = (res.status)?'connected':'disconnected'
				callback({
					status : 'error',
					error : ('Robot is already'+errorWord)
				})
			}else{
				const con = new Pool(config.pgCon);
				var query = "UPDATE projects SET status='"+data.status+"',token_robot='"+data.token+"' WHERE uniqueDataOfUser='"+data.uniqueDataOfUser+"' and id='"+data.id+"'"
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
			}
		})
	}

}

module.exports = new user()