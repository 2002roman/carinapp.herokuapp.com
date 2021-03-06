process.on('message', (msg) => {
	if(msg.message_name == 'start'){
  		startSocket(msg)
	}else{
  		console.log(msg)
	}
});

let startSocket = (con)=>{
	
	console.log('started socket stream in index :',con.index)
	let ioStream = require('socket.io')(con.server, { path: '/stream'+con.index })
	console.log(ioStream,{ path: '/stream'+con.index })
	ioStream.on('connection', function (socket) {
		console.log('connected in stream')
		socket.on('stream',(data)=>{
			ioStream.to(data.id).emit('stream', data.image);
		})
	});
}