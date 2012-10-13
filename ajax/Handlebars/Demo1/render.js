(function() {

    var render_ppl = function() {
        var source = document.getElementById('tmpl-people').innerHTML;
        var template = Handlebars.compile(source);

        var ctx = { people: [
          { color: 'red',  name: 'Mike' },
          { color: 'blue', name: 'Jim' }
        ]};

        var result = template(ctx);

        var container = document.getElementById('container');
        container.innerHTML = result;
    };


    var render = function() {
        var source = document.getElementById('tmpl-entry').innerHTML;
        var template = Handlebars.compile(source);

        var context  = {
            name: 'Jimmy Jones',
            details: 'Friend of Ghandi'
        };
        var result = template(context);
        alert(result);
        var container = document.getElementById('container');
        container.innerHTML = result;

    };

    window.addEventListener('load', render_ppl, false);

}());
