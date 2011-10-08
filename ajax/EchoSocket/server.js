(function(global) {
    
    var io = require('socket.io').listen(8080);

    io.sockets.on('connection', function (socket) {

        socket.on('ping', function (data) {
            socket.emit('pong', { text : data.text });
        });
        
    });
}(this));