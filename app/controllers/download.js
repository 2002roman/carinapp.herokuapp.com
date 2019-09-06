const config = require('../../config/setting.js')

exports.robotZip = (req,res)=>{
    res.download(require('path').join(__dirname, '../../download/robot.rar'),'robot.rar')
}