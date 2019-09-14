var user = require('../app/models/user.js')
var ioStream = []
module.exports = function (socketIo,server) {
	for(var i=0;i<10;i++){
		ioStream.push(socketIo(server,{ path: '/stream'+i }))

		ioStream[i].on('connection', function (socket) {
			var index = i
			socket.on('stream',(data)=>{
				console.log(index,ioStream)
				ioStream[index].to(data.id).emit('stream',data.data);
			})
		});
	}
}
