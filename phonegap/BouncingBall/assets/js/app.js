// 
//  --- our app behavior logic ---
//
//

$('document').ready(function() {
    var ballDiv = document.getElementById('ball'),
        accelaration = 0,
        watch        = null,
        spanx        = document.getElementById('x'),
        spany        = document.getElementById('y'),
        spanz        = document.getElementById('z');

    var ball = {};
    var pos  = $(ballDiv).offset();

    ball.ax = 0;
    ball.ay = 0;
    ball.vx = 0;
    ball.vy = 0;
    ball.x  = pos.left;
    ball.y  = pos.top;

    function successCallback(ac) {
        accelaration = ac.z;
        spanx.innerHTML = ac.x;
        spany.innerHTML = ac.y;
        spanz.innerHTML = ac.z;
        ball.ax = -1 * ac.x;
        ball.ay = ac.y;
    }

    function tick() {
        if ( watch ) {
            if ( ( ball.x + ball.vx > 0 ) && ( ball.x + ball.vx < 320 ) ) {
                ball.x += ball.vx;
            }

            if ( ( ball.y + ball.vy > 0 ) && ( ball.y + ball.vy < 480 ) ) {
                ball.y += ball.vy;
            }

            $(ballDiv).offset({top : ball.y, left : ball.x});

            if ( Math.abs(ball.vx + ball.ax) < 5 ) {
                ball.vx += ball.ax;
            }

            if ( Math.abs(ball.vy + ball.ay ) < 5 ) {
                ball.vy += ball.ay;
            }

            $('#ax').text(ball.ax);
            $('#ay').text(ball.ay);
            $('#vx').text(ball.vx);
            $('#vy').text(ball.vy);

            setTimeout(tick, 33);
        }
    }

    function errorCallback() {
        alert('Accelerometer Error');
    }

    function toggleBall() {
        if ( watch ) {
            navigator.accelerometer.clearWatch(watch);
            watch = null;
            ballDiv.style.backgroundColor = 'blue';
        } else {
            var options = { frequency : 300 };
            watch = navigator.accelerometer.watchAcceleration(successCallback, errorCallback, options);
            ballDiv.style.backgroundColor = 'red';
            setTimeout(tick, 33);
        }
    }

    document.addEventListener('deviceready', function() {
        toggleBall();
    }, false);


    ballDiv.addEventListener('click', toggleBall, false);
});

