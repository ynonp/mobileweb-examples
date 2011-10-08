(function(global) {

    var q = [
        app.Question('If there are five apples, and you take away 3. How many are left ?',
                [0, 1, 2, 3],
                2),
        
        app.Question('The spanish civil war which began July 17 of 1936 was fought between ?',
            ['Spain and Germany',
             'Mexico and the US',
             'Spain and Italy',
             'None of the above'],
            3)];
    
    
    var quiz = app.Quiz(q);
    var next;
    
    while (!!(next = quiz.next_question())) {
        next.show();
        next.answer(0);        
    }
    
    console.log('You scored:');
    console.log(quiz.score());
    
}(this));
