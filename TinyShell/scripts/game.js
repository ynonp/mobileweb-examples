(function() {
    
    /**
     * applyAnimation applies the animation_cls to the element
     * After the animation has ended, it performs:
     *   removeClass
     *   unbind the end handler
     * This way everything will go back to how it was before starting
     * the animation
     */
    
    function applyAnimation($el, animation_cls, callback, context) {
        
        var endAnimationHandler = function(e) {
            if ( e.animationName === animation_cls ) {
                $el.removeClass(animation_cls);
                $el.unbind('webkitAnimationEnd', endAnimationHandler);
                
                if ( typeof callback === 'function' ) {
                    callback.apply(context);
                }
            }
        };
        
        $el.bind('webkitAnimationEnd', endAnimationHandler);
        $el.addClass(animation_cls);
    }
    
    
    var game = {
        counter : 5,
        SWAPS : {
            '0_1' : ['move-right-1', 'move-left-1'],
            '1_0' : ['move-left-1', 'move-right-1'],
            
            '2_1' : ['move-left-1', 'move-right-1'],
            '1_2' : ['move-right-1', 'move-left-1'],
            
            '0_2' : ['move-right-2', 'move-left-2'],
            '2_0' : ['move-left-2', 'move-right-2']
        }
    };
    
    game.start = function() {
        var $ball = $('.ball'),
            $winner = $('.shell.winner');            
        
        $ball.css('visibility', 'visible');
        $ball.removeClass('first, second, third');
        $ball.addClass($winner.attr('ball-class'));
                
        $('#btn-start').css('visibility', 'hidden');
        
        applyAnimation($('.shell.winner'), 'flash-up-down', function() {
            $ball.css('visibility', 'hidden');
            game.swapShells(0, 2);
        });
    };
        
    game.shuffle = function() {
        game.counter -= 1;
        
        if ( game.counter <= 0 ) {
            game.playerTurn();
        } else {
            var i = Math.floor(Math.random() * 3),
                j = Math.floor(Math.random() * 3);
                
            if ( i === j ) {
                i = (i + 1) % 3;
            }
            game.swapShells(i, j);
        }
    };
    
    game.playerTurn = function() {
        alert('Find the ball');
        
        $('.shell').click(function() {
           var $this = $(this);
           
           if ( $this.hasClass('winner')) {
            alert("Bravo !");
           }
           
           $('.shell').unbind('click');
           game.counter = 5;
           game.start();
        });
    };
    
    /**
     * swapShells:
     *
     * 1. If a shell is a winner - replace winning status
     * 2. apply both animations
     */
    
    game.swapShells = function(i, j) {
        var $shell_i = $('.shell').eq(i),
            $shell_j = $('.shell').eq(j),
            key      = String(i) + "_" + String(j),
            anim     = game.SWAPS[key];
            
            
        if ( typeof anim === 'undefined' ) {
            return; // nothing to do
        }
        
        if ( $shell_i.hasClass('winner') ) {
            $shell_i.removeClass('winner');
            $shell_j.addClass('winner');
        } else if ( $shell_j.hasClass('winner') ) {
            $shell_j.removeClass('winner');
            $shell_i.addClass('winner');
        }
        
        var animation_tracker = { counter : 2 };
        animation_tracker.mark = function() {
            this.counter -= 1;
            if ( this.counter <= 0 ) {
                setTimeout(game.shuffle, 0);
            }
        };
        
        applyAnimation($shell_i, anim[0], animation_tracker.mark, animation_tracker);
        applyAnimation($shell_j, anim[1], animation_tracker.mark, animation_tracker);
    };
    
    
    $('document').ready(function() {       
       $('#btn-start').click(game.start); 
    });
    
    
}());