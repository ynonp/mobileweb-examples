(function(global) {
    
    function Critter($el) {
        var that = {};
                
        var speed     = Math.floor(Math.random() * 5) + 1;
        var direction = 1;
        
        that.contains = function(x, y) {
            var coords = $el.offset();
            var w      = $el.width();
            var h      = $el.height();
            
            if ( ( x > coords.left ) && ( x < coords.left + w) &&
                 ( y > coords.top  ) && ( y < coords.top  + h) ) {
                return true;
            } else {
                return false;
            }
        };
        
        that.start = function(loop) {
            $el.css('background', 'red');
            loop.push(function() {
                var left = parseInt($el.css('left'), 10);                
                var newval = left + (speed * direction);
                
                if ( ( newval > 270 ) || ( newval < 0 ) ) {
                    direction *= -1;
                    newval = left + (speed * direction);
                }
                
                $el.css('left', newval + 'px');                
            });
        };        
        
        return that;
    }
    
    function AnimationLoop() {
        var that = { loop : [], play : false };        
        
        that.start = function() {
            that.play = true;
            that.watch = setInterval(function() {
                for ( var i=0, len = that.loop.length; i < len; ++i ) {
                    var act = that.loop[i];
                    act();
                }
            }, 30);            
        };
        
        that.stop = function() {
            that.play = false;
            clearInterval(that.watch);
        };
        
        return that;
    }
    
    $('document').ready(function() {
        var animation = AnimationLoop();
        var critters = [];
        
        animation.start();
        
        $('div.critter').bind('touchstart', function(e) {
            var $this = $(this);
            var c     = $this.data('crit');
            
            if ( ! c ) {
                c = Critter($(this));
                c.start(animation.loop);
                $this.data('crit', c);
                critters.push(c);
            }
        });
        
        
        $('div.view').bind('touchmove', function(ev) {
            var e = ev.originalEvent, x, y;
            
OUTER:
            for ( var j=0, tl=e.touches.length; j < tl; j++ ) {
                x = e.touches[j].pageX;
                y = e.touches[j].pageY;
                
                for ( var i=0, len=critters.length; i < len; i++ ) {                    
                    if ( critters[i].contains(x, y) ) {
                        continue OUTER;
                    }                    
                }
                
                animation.stop();
                alert('Game Over: ' + e.touches[j].pageX + ',' + e.touches[j].pageY);
                break OUTER;                
            }
            
            e.preventDefault();
        });
        
        $('div.critter').bind('touchend', function() {
            var $this = $(this);
            var c = $this.data('crit');
            
            if ( c && animation.play ) {
                animation.stop();
                alert('Game Over');
            }
        });
    });
    
    
    
}(this));