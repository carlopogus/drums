var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var fs = require('fs');

http.listen(3001, function(){
  console.log('listening on *:3001');
});

io.on('connection', function (socket) {
  socket.on('hit', function (data) {
    io.emit('dir', data);
    console.log(data);
  });
});
