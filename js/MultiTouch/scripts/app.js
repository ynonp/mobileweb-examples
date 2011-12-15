(function(global) {
    
    window.onload = function() {
      var can = document.querySelector('canvas');
      var ctx = can.getContext('2d');
      
      var touches = [];
      
      can.addEventListener('touchmove', function(e) {
        e.preventDefault();
        touches = e.touches;
      }, false);
            
      var watchid = setInterval(function() {
        console.log('touches = ' + touches.length);
        
        for ( var i=0, len = touches.length; i < len; ++i ) {
            
            var touch = touches[i];
            var px = touch.pageX;
            var py = touch.pageY;
            
            ctx.beginPath();
            ctx.arc(px, py, 20, 0, 2*Math.PI);
            ctx.fillStyle = 'rgb(0, 0, 200)';
            ctx.fill();
        }
        
      }, 100);
    };
    
    
}(this));