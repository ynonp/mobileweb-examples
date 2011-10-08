(function() {
    
    $('document').ready(function() {
       
       $('#btn-go').click(function() {
            var fx = $('input:checked').attr('value');
            $.mobile.changePage('#content', { transition : fx });        
       });
       
        
    });
    
    
}());