(function(global, $) {
    
    function PageMain($el) {
        var that = {};
        
        that.refresh = function() {            
            $.get('/ex5/colors', function(data) {
                var view = { items : data };
                var html = Mustache.to_html(global.templates.textlist,
                                            view);
                var $ul  = $el.find('#colorlist');
                
                $ul.html(html);
                $ul.listview('refresh');                
            });
        };
        
        that.init = function() {
            $el.find('#btn-refresh').click(that.refresh);
        };
        window.$el = $el;
        return that;
    }
    
    
    
    $('#page-main').live('pageinit', function() {
        PageMain($(this)).init();
    });
}(this, $));