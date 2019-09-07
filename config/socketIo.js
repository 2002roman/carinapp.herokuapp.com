var user = require('../app/models/user.js')

module.exports = function (io) {

	io.on('connection', function (socket) {

		socket.on('verifyRobotAndTurnOn', function (data) {
			data.status = true
			console.log(data)
			user.setStatus(data,(res)=>{
				socket.emit('verifyRobotAndTurnOn_res',res)
			})
		});

		socket.on('disconnect',(data)=>{
			console.log('disconnected project:',data)
		})
	});

}