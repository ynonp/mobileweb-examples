/**
 *
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 9/14/12
 * Time: 10:15 PM
 * To change this template use File | Settings | File Templates.
 */

/*
localStorage.setItem('key', 'value');

var val = localStorage.getItem('key');

var text = JSON.stringify(obj);
var obj = JSON.parse(text);
*/

function saveData() {
    var info = {
        username: $('#username').val(),
        web: $('#web').val(),
        phone: $('#phone').val()
    };
    var info_text = JSON.stringify(info);
    localStorage.setItem('info', info_text);
}

function restoreData() {
    var info_text = localStorage.getItem('info');
    if ( info_text != null ) {
        var info = JSON.parse( info_text );
        $('#username').val( info.username );
        $('#web').val( info.web );
        $('#phone').val( info.phone );
    }
}

$(function() {
    restoreData();
    $('form').on('input', saveData );
});




