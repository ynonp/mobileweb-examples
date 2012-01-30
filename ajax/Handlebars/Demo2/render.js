(function() {
    
    var render = function() {
        var source = document.getElementById('tmpl-entry').innerHTML;
        var template = Handlebars.compile(source);
        
        var context  = {
            name: 'Jimmy Jones',
            pets: ['dog', 'cat', 'penguin']
        };
        
        Handlebars.registerHelper('oldest', function(pets) {
            console.log(pets);
            
            return pets.reduce(function(prev, val) {
                console.log('prev = ', prev);
                console.log('val = ', val);
                return prev.length < val.length ? val : prev
            });
        });
        
        
        var result = template(context);
        
        var container = document.getElementById('container');
        container.innerHTML = result;
    };    
    
    window.addEventListener('load', render, false);
    
}());