(function(global) {

    
    
    $(function() {
       var  socket   = io.connect('http://localhost:8080'),
            output   = $('input#out'),
            input    = $('input#in'),
            btn_send = $('a#btn-send');
       
       socket.on('pong', function(data) {
            output.val(data.text);
       });
       
       btn_send.click(function() {
            socket.emit('ping', { text : input.val() });
       });
    });
    
}(this));
