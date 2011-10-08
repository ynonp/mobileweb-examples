"use strict";

(function() {
    
    $('document').ready(function() {
        
        var state = 0;
        
        $('button#toggle').click(function() {
            if ( state === 0 ) {
                state = 1;
                $('h2.text').addClass('huge');
            } else if ( state === 1 ) {
                state = 0;
                $('h2.text').removeClass('huge');
            } else {
                throw 'Invalid State: ' + state;
            }
        });
    });
    
    
}());