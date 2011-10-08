(function() {
    
    $('document').ready(function() {
        var $page = $('div.page');
        
        
        $('a').click(function() {
            var $btn  = $(this),
                color = $btn.attr('id');
                
            
            $page.css('background', color);
        });
        
        
        
    });
    
    
}());