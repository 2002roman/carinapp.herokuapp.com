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
			user.setStatus(data,(res)=>{
				socket.emit('verifyRobotAndTurnOn_res',res)
			})
		});

		socket.on('verifyUser', function (data) {
			socket.role = 'user'
			user.getRobotData(data,(res)=>{
				socket.emit('verifyUser_res',res)
				if(res.status=='done'){
					socket.token_robot = res.token_robot
					io.to(res.token_robot).emit('handshake',{id:socket.id});
				}
			})
		});

		socket.on('setUserIdFromRobot',(id)=>{
			socket.token_user = id
		})

		socket.on('setDirection',(data)=>{
			if(socket.role=='user'){
				data.id = socket.id
				io.to(socket.token_robot).emit('direction',data);
			}
		})

		socket.on('disconnect',(data)=>{
			if(socket.role == 'robot'){
				socket.data.status = false
				socket.data.token = ''
				user.setStatus(socket.data,(res)=>{
					if(res.status == 'error') console.log(res.error)
				})
			}
		})

		socket.on('setUserStreamIds',(socketsId)=>{
			io.to(socket.token_robot).emit('userIds',socketsId);
		})

	});

}