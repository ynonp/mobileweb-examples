(function() {

    function drawCircles(ctx) {
        ctx.translate(75,75);

        for (var i=1;i<6;i++){ // Loop through rings (from inside to out)
            ctx.save();
            ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';

            for (var j=0;j<i*6;j++){ // draw individual dots
                ctx.rotate(Math.PI*2/(i*6));
                ctx.beginPath();
                ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
                ctx.fill();
            }

            ctx.restore();
        }
    }

    function drawBackground(ctx) {
        ctx.save();
        var grad = ctx.createLinearGradient(0, 0, 150, 0);
        grad.addColorStop(0, "#888");
        grad.addColorStop(1, "#eee");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 150, 150);
        ctx.fill();
        ctx.restore();
    }


    window.onload = function() {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');

        drawBackground(ctx);
        drawCircles(ctx);
    };


}());

