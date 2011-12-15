(function(global) {
    
    $(function() {
        $('#btn-refresh').click(function() {
            $.get('/ex2/user', function(info) {
                var info_html = Mustache.to_html(global.templates.form, info);
               $('#form').html(info_html);
            });
        });        
    });
    
    
    
}(this));