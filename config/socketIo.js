var user = require('../app/models/user.js')

module.exports = function (io) {

	io.sockets.on('connection', function (socket) {
		socket.role = ''
		socket.data = {}

		socket.on('verifyRobotAndTurnOn', function (data) {
			socket.role = 'robot'
			socket.data = data
			data.status = true
			data.token = socket.id
			console.log(data)
			user.setStatus(data,(res)=>{
				socket.emit('verifyRobotAndTurnOn_res',res)
			})
		});

		socket.on('verifyUser', function (data) {
			//socket.role = 'user'
			// data.token = socket.id
			// console.log('verifyUser data:',data)
			// user.getRobotData(data,(res)=>{
			// 	socket.emit('verifyUser_res',res)
			// 	if(res.status=='done'){
			// 		console.log('its a done',io.sockets.clients())
					io.to(res.token_robot).emit('handshake',{id:socket.id});
			// 	}
			// })
		});

		socket.on('disconnect',(data)=>{
			console.log('disconnected :',socket.role)
			console.log('disconnected client data:',socket.data)
			if(socket.role == 'robot'){
				socket.data.status = false
				socket.data.token = ''
				user.setStatus(socket.data,(res)=>{
					if(res.status == 'error') console.log(res.error)
				})
			}
		})

	});

}