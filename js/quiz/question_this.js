(function(global) {
    /**
     * A function for creating a new question
     * Inputs: q           - the question text
     *         a           - An array of possible answers
     *         correct_idx - the index in the array of the "correct" answer
     */
    
    var Question = function() {
        
        this.answer = function(guess) {
            
            if ( this.score !== 0 ) {
                throw 'Cannot answer the same question twice';
            }
            
            if ( guess === this.correct_idx ) {
                this.score += 1;
            } else {
                this.score -= 1;
            }
            return guess === this.correct_idx;
        };
        
        this.show = function() {
            console.log(this.q);
            for ( var i=0; i < this.a.length; ++i ) {
                console.log(this.a[i]);
            }
        }
        
        return this;
    };

    global.app.Question = function(q, a, correct_idx) {
        var that = object(Question());
        
        that.q = q;
        that.a = a;
        that.correct_idx = correct_idx;
        that.score = 0;
        
        return that;
    }
    
}(this));
