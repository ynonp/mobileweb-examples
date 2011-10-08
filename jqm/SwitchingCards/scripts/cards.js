(function(global) {
    
    var Card = function(el) {
        return { el : el }
    }

    var Viewport = function(el, active) {
        // create a new viewport on el using active card in the center
        var that  = { el : el, active : active, cards : el.find('div.card') };
        
        that.setActiveCard = function(active) {
            var el     = that.el,
                cards  = that.cards,
                total  = cards.length,
                offset, theTransform, matrix;
    
            for ( var i=0; i < total; ++i ) {
                offset = (active - i) * 100 * (-1);                
                cards.eq(i).css('left', offset + '%');                
            }
        }
        
        that.next = function() {
            that.active = (that.active + 1) % (that.cards.length);            
            that.setActiveCard(that.active);
            console.log('next = ' + that.active);
        };
        
        that.previous = function() {
            that.active = (that.active - 1) % (that.cards.length);
            
            if ( that.active < 0 ) {
                that.active += 3;
            }
            
            that.setActiveCard(that.active);
            console.log('prev = ' + that.active);            
        }
        
        el.css('display', 'block');
        that.setActiveCard(active);
        return that;
    }
    
    $('document').ready(function() {
        var $viewport = $('div.viewport'),
            viewport  = Viewport($viewport, 0);
            
        $viewport.bind('swipeleft', viewport.next);
        $viewport.bind('swiperight', viewport.previous);
    });
    
}(this));