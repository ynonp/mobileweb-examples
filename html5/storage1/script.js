(function(global) {

    $('#btn-save').click(function(e) {
        e.preventDefault();

        var name  = $('#name').val();
        var color = $('#color').val();

        var p = global.Person(name, color);
        global.people.addPerson(p);
    });

    $('#btn-restore').click(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var p    = global.people.getPersonByName(name);

        if ( p ) {
            $('#color').val(p.color);
        }
    });

}(this));

