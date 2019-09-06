const config = require('../../config/setting.js')

exports.roborZip = (req,res)=>{
    res.sendFile(__dirname+'/download/robor.rar')
}