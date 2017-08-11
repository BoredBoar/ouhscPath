const massive = require('massive');
var connectionString = "postgres://new_user:new_pass@db/new_db";
var db = massive.connectSync({connectionString : connectionString});
db.saveDoc("test_doc", {test:'this is text text'}, function(err,doc) {
    if (err) console.error("Error encoutered:", err);
    console.log('Add doc:', doc);
});


var io = require('socket.io')();
io.on('connection', function(client){
  console.log('client connected');
});
io.listen(3000);
