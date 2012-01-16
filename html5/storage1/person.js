(function(global) {

    var Person = function(name, color) {
        var that = {
            name: name,
            color: color,
            hello: function() {
                console.log('My name is: ' + name);
            }
        };

        return that;
    };

    global.Person = Person;

}(this));

