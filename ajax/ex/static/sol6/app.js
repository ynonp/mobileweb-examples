(function(global) {
    global.templates = {};
    
    global.templates.highscore = '      \
        {{#all_scores}}                      \
            {{#is_high}}                \
            <li>{{player}}: {{score}}</li>   \
            {{/is_high}}                    \
        {{/all_scores}} \
    ';
    
    $(function() {
        $('#btn-refresh').click(function() {
           $.get('/ex6/top10', function(data) {
            
            var view = {
                all_scores : data,
                is_high : function() { return this.score > 94 }
            };
            
            var html = Mustache.to_html(global.templates.highscore, view);
            $('ul').html(html);
            $('ul').listview('refresh');            
           });
        });
        
        $('#btn-send').click(function() {
            var username = $('#name').val();
            var score    = $('#score').val();
            
           $.post('/ex6/score', { name : username, score : score }); 
        });
    });
    
    
    
    
}(this));