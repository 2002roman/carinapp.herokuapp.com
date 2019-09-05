var user = require('../models/user');
var uuidv1 = require('uuid/v1')
var mime = require('mime')
var fs = require('fs')
var path = require('path')
const crypto = require("crypto")

// function accessTokenDeniedF(req,res){
// 	res.clearCookie('token')
// 	res.clearCookie('typeAccess')
// 	res.send({
// 		statusInQuery:false,
// 		err:"Access Token Denied...Please sign in again"
// 	})
// }

exports.getAllProjects = (req,res)=>{
	user.projects(req.cookies,(projects)=>{
		res.send(projects)
	})
}
exports.createProject = (req,res)=>{
	if(req.body == {} || req.cookies == {}){
		res.send({
			status:'error',
			message:'inj vor ban ayn che porceq krkin'
		})
		return
	}
	const id = crypto.randomBytes(16).toString("hex");
	user.createProject(req.cookies,req.body,id,(done)=>{
		res.send(done)
	})
}
// exports.image = (req,res)=>{
//     user.getUserUniqueD(req.cookies.typeAccess,req.cookies.token,(err,uniqueD,fields)=>{
//     	res.sendFile(path.join(__dirname, '../../usersFiles/'+uniqueD+'-files/',req.params.fileAddress))
//     })
// }

// exports.downloadImage = (req,res)=>{
// 	user.getUserUniqueD(req.cookies.typeAccess,req.cookies.token,(err,uniqueD,fields)=>{
// 		res.download(path.join(__dirname, '../../usersFiles/'+uniqueD+'-files/',req.params.fileAddress),req.params.fileName)
// 	})
// }

// exports.upload = (req,res)=>{
//     user.getUserUniqueD(req.cookies.typeAccess,req.cookies.token,(err,uniqueD,fields)=>{
//     	for(file of req.body.files){
//     		if(file.fileAddress){
// 				var matches = file.fileAddress.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
// 				var imageBuffer = new Buffer(matches[2], 'base64')
//     			var type = matches[1]
//     			var extension = mime.getExtension(type)
//     			var fileName =  uuidv1()+"." + extension
//     			user.insertImage(uniqueD,file.fileName,fileName)
//     			fs.writeFileSync("usersFiles/"+uniqueD+"-files/"+fileName, imageBuffer, 'utf8')
// 			}
//     	}
//     	res.send(true)
//     })
// }

// exports.removeImage = (req,res)=>{
// 	user.getUserUniqueD(req.cookies.typeAccess,req.cookies.token,(err,uniqueD,fields)=>{
// 		user.removeImage(uniqueD,req.params.fileAddress)
// 		fs.unlinkSync("usersFiles/"+uniqueD+"-files/"+req.params.fileAddress)
// 		res.send(true)
// 	})
// }
