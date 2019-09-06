const config = require('../../config/setting.js')

exports.robotZip = (req,res)=>{
    console.log('filename:',require('path').join(__dirname, '../../download/robot.rar'))
    res.download(__dirname+'../../download/robot.rar','robot.rar')
}