module.exports = function(io,db) {
  io.on('connection', function(socket){
    console.log('a user connected');

    socket.emit('my other event', 'thist is a test');

    socket.on('test', function(msg) {
      console.log('test message recieved: ' + msg);
    });

  });
};
