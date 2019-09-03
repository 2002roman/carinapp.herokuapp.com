var access = require('../models/access');
const config = require('../../config/setting.js')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var fs = require('fs')
var uuid = require('uuid/v1')

function getUniqueAccessTokenJWT(username){
    return jwt.sign({username,uniqueStr:new Date()},"secretkeyForjwt---2002roman2002")
}

function generateHash(password,callback){
    bcrypt.genSalt(11,(err, salt)=>{
        bcrypt.hash(password, salt,callback);
    })
}

exports.login = (username,password,done)=>{
    var hash = access.getUserHash(username,(hash)=>{
        bcrypt.compare(password,hash, function(err, result) {
            if(result==true){
                var token = getUniqueAccessTokenJWT(username)
                access.updateAccessToken(username,token)
                done(null,{
                    statusInQuery:true,
                    token
                })
            }else{
                done(null,{
                    statusInQuery:false,
                    err:'Wrong Password'
                })
            }       
        })
    },()=>{
        done(null,{
            statusInQuery:false,
            err:'Wrong Username'
        })
    })
}

exports.regin = (username,password,done)=>{
    access.checkUser(username,(res)=>{
        console.log(res)
        if(res){
        console.log('res is exit')
            done(null,{
                statusInQuery: false,
                err:"Username busy"
            })
        }else{
        console.log('res is empty')
            generateHash(password,(err,hash)=>{
                access.signupUser(username,getUniqueAccessTokenJWT(username),hash,(token)=>{
                    // fs.mkdirSync("./usersFiles/"+username+"-files")
                    done(null,{
                        statusInQuery: true,
                        token
                    })
                })
            })
        }
    })
}

exports.facebookC = (req,res)=>{
    if(req.user) {
    console.log('req.user is exit')
        access.findOrCreate(req.user,()=>{
            // console.log('model callback')
            // fs.mkdirSync("./usersFiles/"+req.user.id+"-files")
        })
        res.cookie('token',req.user.accessToken)
        res.cookie('typeAccess',"facebook")
    }else{
        res.redirect(config.authenticationFailedRedirect)
    }
    res.redirect(config.authenticationSuccessRedirect)
}
