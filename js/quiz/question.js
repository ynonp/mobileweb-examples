(function(global) {
    /**
     * A function for creating a new question
     * Inputs: q           - the question text
     *         a           - An array of possible answers
     *         correct_idx - the index in the array of the "correct" answer
     */
    
    var Question = function(q, a, correct_idx) {
        var that = {
            q : q,
            a : a,
            correct : correct_idx,
            score : 0
        };
        
        that.answer = function(guess) {
            
            if ( that.score !== 0 ) {
                throw 'Cannot answer the same question twice';
            }
            
            if ( guess === that.correct_idx ) {
                that.score += 1;
            } else {
                that.score -= 1;
            }
            return guess === that.correct_idx;
        };
        
        that.show = function() {
            console.log(that.q);
            for ( var i=0; i < that.a.length; ++i ) {
                console.log(a[i]);
            }
        }
        
        return that;
    };

    global.app.Question = Question;    
    
}(this));
