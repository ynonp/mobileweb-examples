(function(global) {
    
    var colors = ['red', 'blue', 'green'];
    var current_color = 0;
    
    $('document').ready(function() {        
        $('p.text').click(function() {            
            $(this).css('color', colors[(current_color++) % colors.length]);
        });    
    });
    
    
}(this));