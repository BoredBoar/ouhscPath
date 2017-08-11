const express = require('express');
const app = express();
const massive = require('massive');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const connectionString = "postgres://new_user:new_pass@db/new_db";
var db = massive.connectSync({connectionString : connectionString});
require('./sockets.js')(io,db);

db.saveDoc("test_doc", {test:'this is text text'}, function(err,doc) {
    if (err) console.error("Error encoutered:", err);
    console.log('Add doc:', doc);
});

event_data = [
  {
    title: 'All Day Event',
    start: '2017-05-01'
  },
  {
    title: 'Long Event',
    start: '2017-05-07',
    end: '2017-05-10'
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: '2017-05-09T16:00:00'
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: '2017-05-16T16:00:00'
  },
  {
    title: 'Conference',
    start: '2017-05-11',
    end: '2017-05-13'
  },
  {
    title: 'Meeting',
    start: '2017-05-12T10:30:00',
    end: '2017-05-12T12:30:00'
  },
  {
    title: 'Lunch',
    start: '2017-05-12T12:00:00'
  },
  {
    title: 'Meeting',
    start: '2017-05-12T14:30:00'
  },
  {
    title: 'Happy Hour',
    start: '2017-05-12T17:30:00'
  },
  {
    title: 'Dinner',
    start: '2017-05-12T20:00:00'
  },
  {
    title: 'Birthday Party',
    start: '2017-05-13T07:00:00'
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: '2017-05-28'
  }
];

db.saveDoc("event", {data:event_data}, function(err,doc) {
    if (err) console.error("Error encoutered:", err);
    console.log('Add doc:', doc);
});

app.get('/', function (req, res) {
  db.test_doc.findDoc(function(err, res) {
      if (err) console.error("Error encoutered:", err);
      console.log('found docs:', res);
  });
  db.event.findDoc(function(err, res) {
      if (err) console.error("Error encoutered:", err);
      console.log('found docs:', res);
  });
  res.sendFile('/proj/src/html/index.html');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
