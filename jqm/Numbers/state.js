/**
 * Created by JetBrains WebStorm.
 * User: ynonperek
 * Date: 3/4/12
 * Time: 7:12 PM
 * To change this template use File | Settings | File Templates.
 */

$('#save').bind('click', function() {
    var val = $('input').val();

    localStorage.setItem('number', val);
});

$('#restore').bind('click', function() {
    var val = localStorage.getItem('number');

    $('input').val(val);
    $('input').slider('refresh');
});

