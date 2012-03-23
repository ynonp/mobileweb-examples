(function(global) {
    
    /** Maker Function **/
    var ShakeDetector = function(onShake) {
        var that = { been_here : false };

        if ( typeof onShake !== 'function' ) {
            throw 'Invalid value for onShake. Should take a function as first argument';
        }

        /** PRIVATE FUNCTIONS **/
        var onMotion = function(acceleration) {
            var shake    = false,
                now      = new Date().getTime(),
                change_x = Math.abs(that.old_x - acceleration.x),
                change_y = Math.abs(that.old_y - acceleration.y),
                change_z = Math.abs(that.old_z - acceleration.z);

            if ( now - acceleration.timestamp > 100 ) {
                return;
            }

            if ( ( ! isNaN(change_x) ) && ( change_x > 2.25 ) ) {
                shake = true;
            }

            if ( ( ! isNaN(change_y) ) && ( change_y > 3 ) ) {
                shake = true;
            }

            if ( ( ! isNaN(change_z) ) && ( change_z > 4.5 ) ) {
                shake = true;
            }

            if ( shake ) {
                that.onShake();
                that.stop();
                setTimeout(that.start, 2000);
            } else {
                var dbg = document.querySelector('.debug');
                var text = "change_x = " + change_x + ", change_y = " + change_y + ", change_z = " + change_z + "</br>";
                dbg.innerHTML += text;
            }

            that.old_x = acceleration.x;
            // that.been_here = false;
        };

        var onError = function() {
            console.log('error getting accelerometer data');
        };

        /** PUBLIC FUNCTIONS **/
        that.start = function() {
            that.watch_id = navigator.accelerometer.watchAcceleration(
                                    onMotion, onError, { frequency : 100 });
            that.onShake = onShake;
        };

        that.stop = function() {
            navigator.accelerometer.clearWatch(that.watch_id);
        };

        return that;
    };

    function init() {
        ShakeDetector(function() {
            document.getElementById('box').setAttribute('class', 'shaked'); 
        }).start();
    }

    document.addEventListener('deviceready', init, false);
}(this));