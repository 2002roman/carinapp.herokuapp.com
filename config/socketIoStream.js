var user = require('../app/models/user.js')
var ioStream = []
module.exports = function (socketIo,server) {
	for(var i=0;i<10;i++){
		ioStream.push(socketIo(server,{ path: '/stream'+i }))

		ioStream[i].on('connection', function (socket) {
			socket.on('stream',(data)=>{
				io.to(data.id).emit('stream',data.data);
			})
		});
	}
}

			// socket.role = ''
			// socket.data = {}
			// socket.on('verifyRobotForStream', function (data) {
			// 	socket.role = 'robot'
			// 	socket.data = data
			// 	socket.streaming
			// 	user.checkProject(data.uniqueDataOfUser,data.id,(res)=>{
			// 		if(res.token_robot==data.token_robot){
			// 			socket.emit('verifyRobotForStream_res',{
			// 				status:'done',
			// 				data:res
			// 			})
			// 		}else{
			// 			socket.emit('verifyRobotForStream_res',{
			// 				status:'error',
			// 				error:'Streaming is failed check params'
			// 			})
			// 		}
			// 	})
			// });

			// socket.on('verifyUserForStream', function (data) {
			// 	socket.role = 'user'
			// 	socket.data = data
			// 	user.getRobotData(data,(res)=>{
			// 		if(res.token_robot==data.token_robot){
			// 			socket.emit('verifyRobotForStream_res',{
			// 				status:'done',
			// 				data:res
			// 			})
			// 		}else{
			// 			socket.emit('verifyRobotForStream_res',{
			// 				status:'error',
			// 				error:'Streaming is failed check params'
			// 			})
			// 		}
			// 	})
			// });

			// socket.on('getStream',(data)=>{
			// 	if(socket.role=='user'){
			// 		data.id = socket.id
			// 		io.to(socket.token_robot).emit('direction',data);
			// 	}
			// })

			// socket.on('disconnect',(data)=>{
			// 	console.log('disconnected role:',socket.role)
			// })