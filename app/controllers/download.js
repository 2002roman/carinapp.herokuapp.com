const config = require('../../config/setting.js')

exports.robotZip = (req,res)=>{
    console.log('filename:',__dirname+'../../download/robot.rar')
    res.download(__dirname+'../../download/robot.rar','robot.rar')
}