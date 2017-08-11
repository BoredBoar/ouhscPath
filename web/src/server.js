const express = require('express');
const app = express();
const massive = require('massive');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const connectionString = "postgres://new_user:new_pass@db/new_db";
var db = massive.connectSync({connectionString : connectionString});
require('./sockets.js')(io,db);

app.get('/', function (req, res) {
  res.sendFile('/proj/src/html/index.html');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
