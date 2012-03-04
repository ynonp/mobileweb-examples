/**
 * Created by JetBrains WebStorm.
 * User: ynonperek
 * Date: 3/3/12
 * Time: 11:25 PM
 * To change this template use File | Settings | File Templates.
 */

(function() {
    var WayPoint = function(x, y) {
        var self = { x: x, y: y, r: 30 };
        self.is_nearby = function(x, y) {
            var d = Math.sqrt( Math.pow(self.x - x, 2) + Math.pow(self.y - y, 2) );
            return d < self.r;
        };

        self.draw = function(ctx) {
            ctx.beginPath();
            ctx.arc(self.x, self.y, self.r, 0, Math.PI * 2);
            ctx.fill();
        };

        return self;
    };

    var w = WayPoint(40,  40);
    var x = WayPoint(220, 80);

    var can = document.querySelector('canvas');
    var ctx = can.getContext('2d');

    w.draw(ctx);
    x.draw(ctx);


    $(can).bind('vmousedown', function(e) {
        var offset_top  = $('canvas')[0].offsetTop;
        var offset_left = $('canvas')[0].offsetLeft;

        var offsetx = e.offsetX || e.pageX - offset_left;
        var offsety = e.offsetY || e.pageY - offset_top;

        if ( ! w.is_nearby(offsetx, offsety) ) {
            alert('you lose: ');
        }
        e.preventDefault();

    });

    $(can).bind('vmouseup', function(e) {
        var offset_top  = $('canvas')[0].offsetTop;
        var offset_left = $('canvas')[0].offsetLeft;

        var offsetx = e.offsetX || e.pageX - offset_left;
        var offsety = e.offsetY || e.pageY - offset_top;

        if ( ! x.is_nearby(offsetx, offsety) ) {
            alert('you lose: ', offsetx, offsety);
        } else {
            ctx.fillStyle = 'blue';
            w.draw(ctx);
            x.draw(ctx);
        }
    });


}());