/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/16/12
 * Time: 10:54 AM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {
    global.views = global.views || {};

    global.views.ColorPicker = function(el, controller) {
        var self = { el: el };

        var mypicker = new SimplePicker("huewell","slwell","resultwell");

        var save_color = function() {
            var clr = mypicker.getRGBString();
            if ( clr ) {
                controller.stash.color = clr;
            }
        };

        el.querySelector('#btn-back').addEventListener('click', function() {
            save_color();
            controller.show_view( controller.views.mainview, 'right' );
        });




        return self;
    };



}(this));