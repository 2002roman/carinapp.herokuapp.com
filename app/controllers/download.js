const config = require('../../config/setting.js')

exports.robotZip = (req,res)=>{
    console.log('filename:',)
    res.download(require('path').join(__dirname, '../../download/robot.rar'),'robot.rar')
}