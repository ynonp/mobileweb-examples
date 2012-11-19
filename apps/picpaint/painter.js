/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/16/12
 * Time: 8:58 PM
 * To change this template use File | Settings | File Templates.
 */

(function(global) {
    global.Painter = function(canvas, stash) {
        var self = {
            canvas: canvas,
            ctx: canvas.getContext('2d')
        };

        var prev = undefined;

        self.start_paint = function( touch_start_event ) {
            var touches = touch_start_event.touches,
                t = touches[0],
                x = t.clientX - self.canvas.offsetLeft,
                y = t.clientY - self.canvas.offsetTop;
            console.dir(stash);
            self.ctx.fillStyle = stash.color;

            self.ctx.beginPath();
            self.ctx.arc(x, y, 5, 0, Math.PI * 2);
            self.ctx.fill();
            prev = { x: x, y: y };
        };

        self.paint = function( touch_move_event ) {
            touch_move_event.preventDefault();
            var touches = touch_move_event.touches,
                t       = touches[0],
                x       = t.clientX - self.canvas.offsetLeft,
                y       = t.clientY - self.canvas.offsetTop;

            if ( prev ) {
                self.ctx.save();

                self.ctx.strokeStyle = stash.color;
                self.ctx.lineWidth = 5;
                self.ctx.beginPath();
                self.ctx.moveTo( prev.x, prev.y );
                self.ctx.lineTo( x, y );
                self.ctx.stroke();
                self.ctx.restore();

                prev.x = x;
                prev.y = y;
            }
        };

        self.draw_image = function( file_change_event ) {
            var reader = new FileReader();
            reader.onload = function(event){
                var img = new Image();
                img.onload = function(){
                    canvas.width = canvas.width;

                    var factor = canvas.width / img.width;
                    self.ctx.drawImage(img,0,0, img.width * factor, img.height * factor );
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file_change_event.target.files[0]);
        };

        self.save = function() {
            var data = canvas.toDataURL();
            localStorage.setItem('image', data);
        };

        self.restore = function() {
            var data = localStorage.getItem('image');
            if ( data != null ) {
                var img = new Image();
                img.onload = function() {
                    canvas.width = canvas.width;
                    self.ctx.drawImage( img, 0, 0 );
                };
                img.src = data;
            }
        };

        return self;
    };


}(this));