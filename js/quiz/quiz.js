(function(global) {
   /**
    * A function for creating a Quiz object
    * Input: questions - an array of Question objects
    */
   
   var Quiz = function(questions) {
        
        var that = { q : questions, current_question : 0 };
        
        that.next_question = function() {
            var q = that.q,
                current_question = that.current_question;
            
            if ( current_question < q.length ) {
                that.current_question += 1;
                return q[current_question];
            }
            
            return null;
        }
        
        that.score = function() {
            var score = 0;
            
            for ( var i=0; i < that.q.length; ++i ) {
                score += that.q[i].score;
            }
            
            return score;
        }
        
        return that;
   }
   
   
   
   global.app.Quiz = Quiz;
    
    
    
}(this));