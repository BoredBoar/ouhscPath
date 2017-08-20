module.exports = function(io,db) {
  io.on('connection', function(socket){
    console.log('a user connected');

    socket.emit('my other event', 'thist is a test');

    socket.on('test', function(msg) {
      console.log('test message recieved: ' + msg);
    });

    socket.on('getIHC', function() {
      db.ihc_table.findDoc(function(err, res) {
        if(err){console.log("err when geeting IHC:", err)}
        else {
          socket.emit("IHC_results", res);
        }
      });
    });

  });
};
