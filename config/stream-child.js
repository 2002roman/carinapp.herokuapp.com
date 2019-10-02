process.on('message', (msg) => {
	if(msg.message_name == 'index'){
  		index = msg.data
  		startSocket(msg.data)
	}else{
  		console.log(msg)
	}
});

let startSocket = (i)=>{
	console.log('started socket stream in index :',i)
	let ioStream = socketIo(server, { path: '/stream'+i })

	ioStream.on('connection', function (socket) {
		socket.on('stream',(data)=>{
			ioStream.to(data.id).emit('stream', data.image);
		})
	});
}