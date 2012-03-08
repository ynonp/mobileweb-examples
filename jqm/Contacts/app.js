/**
 * Created by JetBrains WebStorm.
 * User: ynonperek
 * Date: 3/4/12
 * Time: 7:35 PM
 * To change this template use File | Settings | File Templates.
 */
(function() {

    var Names = [
        { name: 'Bob', email: 'spunge@bob.com'},
        { name: 'Buffy', email: 'vampireslayer@hell.com'},
    ];

    var nameString = localStorage.getItem('contacts');
    if ( nameString != null ) {
        Names = JSON.parse(nameString);
    }


    var render = function() {
        var list = '<ul data-role="listview">';

        for ( var i=0; i < Names.length; i ++ ) {
            var  contact_info = Names[i];
            var text = '<li>' +
                    '<a href="#view" contact-id="' + String(i) + '">' +
                        contact_info.name  +
                    '</a>' +
                '</li>';

            list += text;
        }

        list += '</ul>';

        $('#index-list').html(list);
        $('#index-list ul').listview();

        $('#index-list ul li a').bind('click', function() {
            var contact_id = Number($(this).attr('contact-id'));
            render_contact_to_view(contact_id);
        });
    };

    var add = function() {
        var name  = $('#contact-name').val();
        var email = $('#contact-mail').val();

        var contact_info = {
            name: name,
            email: email
        };

        Names.push(contact_info);
        $.mobile.changePage('#index');

        var namesString = JSON.stringify(Names);
        localStorage.setItem('contacts', namesString);
    };


    var render_contact_to_view = function(contact_id) {
        var contact_info = Names[contact_id];

        $('#view-name').html(contact_info.name);
        $('#view-email').html(contact_info.email);
    };


    $('#save').bind('click', add);
    $('#index').bind('pagebeforeshow', render);


}());