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

exports.createProject = (req,res)=>{
	const id = crypto.randomBytes(16).toString("hex");
	user.createProject(req.cookies,req.body,id,(done)=>{
		res.send(done)
	})
}

exports.editProject = (req,res)=>{
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
	console.log('req.body:',req.body)
	user.deleteProject(req.cookies,req.body,(done)=>{
		res.send(done)
	})
}