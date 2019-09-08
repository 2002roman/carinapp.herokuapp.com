var user = require('../app/models/user.js')

module.exports = function (io) {

	io.on('connection', function (socket) {
		socket.role = ''
		socket.data = {}
		socket.on('verifyRobotAndTurnOn', function (data) {
			socket.role = 'robot'
			socket.data = data
			data.status = true
			data.token = socket.io.engine.id
			console.log(data)
			user.setStatus(data,(res)=>{
				socket.emit('verifyRobotAndTurnOn_res',res)
			})
		});

		socket.on('disconnect',(data)=>{
			console.log('disconnected :',socket.role)
			console.log('disconnected client data:',socket.data)
			if(socket.role == 'robot'){
				socket.data.status = false
				user.setStatus(socket.data,(res)=>{
					if(res.status == 'error') console.log(res.error)
				})
			}
		})

	});

}