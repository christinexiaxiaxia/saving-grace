var express = require('express');

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))





io.on('connection', function(socket){

// COUNT NUMBER OF CONNECTED CLIENTS https://github.com/socketio/socket.io/issues/3166
// GET LIST OF CONNECTED CLIENTS https://stackoverflow.com/questions/6563885/socket-io-how-do-i-get-a-list-of-connected-sockets-clients

  var clients = null;

  clients++; // ADD ONE TO CLIENT COUNT ON CONNECT
  console.log('a user connected');
  console.log("connected clients:", clients, socket.id); // NUMBER OF NEW CONNECTIONS + CLIENT ID
  console.log("io.engine.clientsCount:", io.engine.clientsCount, Object.keys(io.sockets.sockets)); // TOTAL CONNECTION COUNT + LIST OF CONNECTED CLIENTS


  socket.on("disconnect", function(socket) {
    clients--; // SUBTRACT ONE FROM CLIENT COUNT ON DISCONNECT
    console.log("user disconnected");
    console.log("disconnected clients:", clients, socket.id); // NUMBER OF NEW DISCONNECTS + CLIENT ID (client id remains undefined on disconnect)
    console.log("io.engine.clientsCount:", io.engine.clientsCount, Object.keys(io.sockets.sockets)); // TOTAL CONNECTION COUNT + LIST OF CONNECTED CLIENTS

    // delete clients[socket.id];
  });








  // BROADCAST.EMIT MOUSE POSITION TO OTHER CLIENTS

  socket.on('mousemoving', function(dataX, dataY, id){
    // console.log(dataX + ', ' + dataY)
    socket.broadcast.emit("mousemoving", dataX, dataY, id)
  })


  // PRESS SPACE TO START

  socket.on('start', function(){
    console.log('Background black, music playing');
    io.emit('start');
  });


  // MOUSE DOWN

  socket.on('down1', function(){
    io.emit('down1')
  })
  socket.on('down2', function(){
    io.emit('down2')
  })
  socket.on('down3', function(){
    io.emit('down3')
  })
  socket.on('down4', function(){
    io.emit('down4')
  })
  socket.on('down5', function(){
    io.emit('down5')
  })
  socket.on('down6', function(){
    io.emit('down6')
  })


  // MOUSE UP

  socket.on('up1', function(){
    io.emit('up1')
  })
  socket.on('up2', function(){
    io.emit('up2')
  })
  socket.on('up3', function(){
    io.emit('up3')
  })
  socket.on('up4', function(){
    io.emit('up4')
  })
  socket.on('up5', function(){
    io.emit('up5')
  })
  socket.on('up6', function(){
    io.emit('up6')
  })


  // MOUSE OVER

  socket.on('over1', function(){
    io.emit('over1')
  })
  socket.on('over2', function(){
    io.emit('over2')
  })
  socket.on('over3', function(){
    io.emit('over3')
  })
  socket.on('over4', function(){
    io.emit('over4')
  })
  socket.on('over5', function(){
    io.emit('over5')
  })
  socket.on('over6', function(){
    io.emit('over6')
  })
  

  // MOUSE OUT

  socket.on('out1', function(){
    io.emit('out1')
  })
  socket.on('out2', function(){
    io.emit('out2')
  })
  socket.on('out3', function(){
    io.emit('out3')
  })
  socket.on('out4', function(){
    io.emit('out4')
  })
  socket.on('out5', function(){
    io.emit('out5')
  })
  socket.on('out6', function(){
    io.emit('out6')
  })


  // START SCREEN MOUSE OVER

  socket.on('startover1', function(){
    io.emit('startover1')
  })
  socket.on('startover2', function(){
    io.emit('startover2')
  })
  socket.on('startover3', function(){
    io.emit('startover3')
  })


  // START SCREEN MOUSE OUT

  socket.on('startout1', function(){
    io.emit('startout1')
  })
  socket.on('startout2', function(){
    io.emit('startout2')
  })
  socket.on('startout3', function(){
    io.emit('startout3')
  })

});


http.listen(11116, function(){
  console.log('listening on *:11116');
});







