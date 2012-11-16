/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/16/12
 * Time: 10:54 AM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {

    global.views = global.views || {};

    global.views.Main = function(el, controller) {
        var self = { el: el };

        var image_loader = el.querySelector('#inp-snap');
        console.dir(image_loader);

        var canvas = el.querySelector('canvas');
        var painter = new global.Painter( canvas, controller.stash );

        // paint image after the user chooses one
        image_loader.addEventListener('change', painter.draw_image );

        // allow drawing on the image
        canvas.addEventListener('touchstart',   painter.start_paint );
        canvas.addEventListener('touchmove',    painter.paint );

        // bind buttons
        el.querySelector('#btn-color').addEventListener('click', function() {
            controller.show_view( controller.views.colorview, 'left' );
        });

        el.querySelector('#btn-save').addEventListener('click', painter.save );
        el.querySelector('#btn-restore').addEventListener('click', painter.restore )

        return self;
    };


}(this));
