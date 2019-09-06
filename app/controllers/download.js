const config = require('../../config/setting.js')

exports.robotZip = (req,res)=>{
    res.sendFile(__dirname+'/download/robot.rar')
}