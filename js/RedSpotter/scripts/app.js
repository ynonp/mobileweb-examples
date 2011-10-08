(function() {
    var score = 0;
    
    function randomizeBox() {
        var i = (Math.floor(Math.random() * 4));
        
        $('div.box').css('backgroundColor', 'blue').data('it', 0);
        $('div.box').eq(i).css('backgroundColor', 'red').data('it', 1);        
    }

    function onClick() {
        var $el = $(this);
        
        if ( $el.data('it') === 1 ) {
            score += 1;
            randomizeBox();            
        } else {
            score -= 1;
        }
        $('span#score').text(score);
    }
    
    $('document').ready(function() {
       randomizeBox();
       
        $('div.box').click(onClick);
    });

}());