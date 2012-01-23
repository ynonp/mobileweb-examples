(function(global) {
    var workers = [new Worker('worker.js'),
                   new Worker('worker.js'),
                   new Worker('worker.js')];
    var race_is_on = true;
    var winner_el = document.querySelector('input.winner');
    
    var handle_result = function(e) {
        if ( race_is_on ) {
            race_is_on = false;
            winner_el.value = e.data;
        }        
    };
    
    for ( var i=0; i < workers.length; ++i ) {
        workers[i].addEventListener('message', handle_result);
    }
    
    window.onload = function() {
        var btn = document.querySelector('button');
        
        btn.addEventListener('click', function() {
            race_is_on = true;
            var inputs = document.querySelectorAll('.players input');
            
            for ( var i=0, len=inputs.length; i < len; ++i ) {
                var name = inputs.item(i).value;                
                workers[i].postMessage(name);
            }
        }, false);
        
    }
    
    
    
    
    
    
    
}(this));