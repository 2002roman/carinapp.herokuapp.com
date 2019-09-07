var user = require('../app/models/user.js')

module.exports = function (io) {

	io.on('connection', function (socket) {
		socket.role = ''
		socket.data = {}
		socket.on('verifyRobotAndTurnOn', function (data) {
			socket.role = 'robot'
			socket.data = data
			data.status = true
			console.log(data)
			user.setStatus(data,(res)=>{
				socket.emit('verifyRobotAndTurnOn_res',res)
			})
		});

		socket.on('disconnect',(data)=>{
			console.log('disconnected :',socket.role)
			if(socket.role == 'robot'){
				data.status = false
				user.setStatus(data,(res)=>{
					if(res.status == 'error') console.log(res.error)
				})
			}
		})
	});

}