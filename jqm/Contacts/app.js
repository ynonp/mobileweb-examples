/**
 * Created by JetBrains WebStorm.
 * User: ynonperek
 * Date: 3/4/12
 * Time: 7:35 PM
 * To change this template use File | Settings | File Templates.
 */
(function() {

    var Names = [
        'Bob',
        'Mike',
        'Tim',
        'Ezra'
    ];
   

    var nameString = localStorage.getItem('contacts');
    if ( nameString != null ) {
        Names = JSON.parse(nameString);
    }


    var render = function() {
        var list = '<ul data-role="listview">';

        for ( var i=0; i < Names.length; i ++ ) {
            var name = Names[i];
            var text = '<li>' + name + '</li>';
            list += text;
        }

        list += '</ul>';

        $('#index-list').html(list);
        $('#index-list ul').listview();
    };

    var add = function() {
        Names.push($('#contact-name').val());
        $.mobile.changePage('#index');

        var namesString = JSON.stringify(Names);
        localStorage.setItem('contacts', namesString);
    };


    $('#save').bind('click', add);
    $('#index').bind('pagebeforeshow', render);

}());