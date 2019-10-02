var user = require('../app/models/user.js')
var ioStream = []
const { fork } = require('child_process');
var forkeds = []

module.exports = function (socketIo, server) {
	for(let i = 0; i < 10; i++){
		forkeds[i] = fork('config/stream-child.js');
		forkeds[i].send({ 'message_name' : 'start' , 'index' : i ,'socketIo' : socketIo,'server' : server})
	}
}
