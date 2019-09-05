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
