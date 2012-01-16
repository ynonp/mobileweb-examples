(function(global) {

    var People = function() {
        var that = { data: {} };

        that.addPerson = function(person) {
            that.data[person.name] = person;
            window.localStorage.setItem('people',
                JSON.stringify(that.data));
        };

        that.getPersonByName = function(name) {
            return that.data[name];
        };

        var saved = window.localStorage.getItem('people');
        if ( saved ) {
            that.data = JSON.parse(saved);
        }
        return that;
    };

    global.people = People();
}(this));
