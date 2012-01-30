(function() {
    
    var render = function() {
        var source = document.getElementById('tmpl-entry').innerHTML;
        var template = Handlebars.compile(source);
        
        var context  = {
            name: 'Jimmy Jones',
            details: 'Friend of Ghandi'
        };
        
        var result = template(context);
        
        var container = document.getElementById('container');
        container.innerHTML = result;
    };    
    
    window.addEventListener('load', render, false);
    
}());