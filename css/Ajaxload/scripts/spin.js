(function() {
    
    function rotate(el) {
        var count = 0;
        
        var do_rotate = function() {
            el.style.WebkitTransform = 'scale(0.5) rotate('+count+'deg)';
            count += 45;
            
            if ( count === 360 ) {
                count = 0;
            }
            
            setTimeout(do_rotate, 100);
        };
        
        return do_rotate;
    }
    
    window.onload = function() {
        var el = document.querySelector('.spinner');        
        setTimeout(rotate(el), 100);
    };
    
}());