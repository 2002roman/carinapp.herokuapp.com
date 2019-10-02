process.on('message', (msg) => {
	if(msg.message_name == 'start'){
  		startSocket(msg)
	}else{
  		console.log(msg)
	}
});

let startSocket = (con)=>{
	console.log(con.socketio)
	// console.log('started socket stream in index :',con.index)
	// let ioStream = con.socketIo(con.server, { path: '/stream'+con.index })

	// ioStream.on('connection', function (socket) {
	// 	socket.on('stream',(data)=>{
	// 		ioStream.to(data.id).emit('stream', data.image);
	// 	})
	// });
}