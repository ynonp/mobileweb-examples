addEventListener('message', function(e) {
    
    var sum = 0;
    
    for ( var i=0; i < 9999999; ++i ) {
        sum += i;
    }
    
    self.postMessage(e.data)
    
}, false);