const config = require('../../config/setting.js')

exports.robotZip = (req,res)=>{
    res.download(__dirname+'../../download/robot.rar','robot.rar')
}