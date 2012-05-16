/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 5/16/12
 * Time: 6:54 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {

    function upload_image_to_server() {
        var username = "ynon";
        var description = "My name is Inigo Montoya. You killed my father. Prepare to die";

        var canvas = document.querySelector('canvas');
        var image_data = canvas.toDataURL();

        $.ajax({
            url: 'http://mwproj-ynonp.dotcloud.com/images/upload',
            data: {
                username: username,
                desc: description,
                image_data: image_data
            },
            type: 'POST',
            success: function() { alert("Saved OK"); },
            error: function(err) { alert("Oh no: " + err ) }
        });
    }


    $('#btn-upload').click( upload_image_to_server );
});