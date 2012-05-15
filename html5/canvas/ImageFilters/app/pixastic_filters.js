/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 5/15/12
 * Time: 8:35 AM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {

    var blur = function() {
        $('canvas').pixastic('blur');
    };

    var emboss = function() {
        $('canvas').pixastic('emboss');
    };

    var invert = function() {
        $('canvas').pixastic('invert');
    };

    $('#btn-pix-blur').click( blur );
    $('#btn-pix-emboss').click( emboss );
    $('#btn-pix-invert').click( invert );

});