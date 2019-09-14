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
