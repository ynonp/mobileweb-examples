/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/16/12
 * Time: 10:53 AM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {
    var controller = {
        show_view: function( view, direction ) {
            if ( direction != 'left' && direction != 'right' ) {
                direction = 'left';
            }

            var current = document.querySelector('.current');
            var next = view.el;

            current.classList.remove('current');
            current.classList.add( direction );

            next.classList.remove('right');
            next.classList.remove('left');

            next.classList.add('current');
        },
        views: {},
        stash: {
            color: 'black'
        }
    };

    var mw = document.querySelector('#main');
    var cw = document.querySelector('#color');

    controller.views.mainview  = new global.views.Main(mw, controller);
    controller.views.colorview = new global.views.ColorPicker(cw, controller);

    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 1000);

    global.controller = controller;

}(this));