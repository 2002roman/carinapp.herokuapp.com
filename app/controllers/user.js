var user = require('../models/user');
var uuidv1 = require('uuid/v1')
var mime = require('mime')
var fs = require('fs')
var path = require('path')
const crypto = require("crypto")

exports.getAllProjects = (req,res)=>{
	user.projects(req.cookies,(projects)=>{
		res.send(projects)
	})
}

exports.getProject = (req,res)=>{
	user.project(req.cookies,req.params.id,(project)=>{
		res.send(project)
	})
}

exports.createProject = (req,res)=>{
	const id = crypto.randomBytes(16).toString("hex")
	user.createProject(req.cookies,req.body,id,(done)=>{
		res.send(done)
	})
}

exports.downloadProject = (req,res)=>{
	user.project(req.cookies,req.params.id,(project)=>{
		 fs.writeFile(req.params.id+'---project.json',project.projectdata,(err)=>{
		 	console.log('err:',err)
		 	console.log('data:',project.projectdata)
		    res.download(require('path').join(__dirname, req.params.id+'---project.json'),req.params.id+'---project.json')
		 })
	})
}

exports.editProject = (req,res)=>{
	// console.log(req.body)
	user.editProject(req.cookies,req.body,(done)=>{
		res.send(done)
	})
}

exports.setStatus = (req,res)=>{
	user.setStatus(req.cookies,req.body,(done)=>{
		res.send(done)
	})
}

exports.deleteProject = (req,res)=>{
	user.deleteProject(req.cookies,req.params,(done)=>{
		res.send(done)
	})
}