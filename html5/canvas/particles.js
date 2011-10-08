(function() {
    var object = function(parent) {
        var F = function() { };
        F.prototype = parent;
        
        return new F();
    }
    
    var Particle = { length : 40, radius : 5 };

    Particle.paint = function(ctx) {
        var x = this.x,
            y = this.y,
            angle = this.angle,
            offset_x, offset_y;
            
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.moveTo(x, y);        
        offset_x = Math.cos(angle) * this.length;
        offset_y = Math.sin(angle) * this.length;
        
        console.log('x = ' + x + ', y = ' + y);
        ctx.lineTo(x + offset_x, y + offset_y);
        ctx.stroke();
    }
    
    var make_particle = function(x, y, angle) {
        var p = object(Particle);
        p.x = x;
        p.y = y;
        p.angle = angle;
        return p;        
    };
    
    var canvas = document.querySelector('canvas');
    var ctx    = canvas.getContext('2d');
    var margin = 20;
    
    for ( var i=0; i < 10; ++i ) {
        var x = Math.floor(Math.random() * (canvas.width - margin/2)) + margin/2;
        var y = Math.floor(Math.random() * (canvas.height - margin/2)) + margin/2;
        var angle = Math.random() * 2 * Math.PI;
        
        var p = make_particle(x, y, angle);
        p.paint(ctx);
    }
    
}());