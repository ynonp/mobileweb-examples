(function(global) {
    
    var handleTod = function(tod) {
        $('p.time').text(tod.time);
        
        if ( tod.min < 10 ) {
            tod.min = '0' + tod.min;
        }
        
        if ( tod.hour < 10 ) {
            tod.hour = '0' + tod.hour;
        }
        
        if ( tod.sec < 10 ) {
            tod.sec = '0' + tod.sec;
        }
        
        $('p.short-time').text(tod.hour + ':' + tod.min + ':' + tod.sec);
    };
        
        
    var refreshTime = function() {
       $.get('/tod', handleTod ); 
    };
    
    $(function() {
        refreshTime();
       setInterval(refreshTime, 1000);
    });
    
    
}(this));