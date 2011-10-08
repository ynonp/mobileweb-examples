(function(global) {
    var ns = google.maps;
    var map, circleMarker;

    function init() {
        var latlng = new ns.LatLng(0, 0);

        var opts = {
            zoom             : 2,
            center           : latlng,
            disableDefaultUI : true,
            scaleControl     : true,
            mapTypeId        : ns.MapTypeId.SATELLITE
        };

        map = new ns.Map(document.getElementById("map"), opts);
    }

    function drawCircleMark(latlng, accuracy, color) {
        if ( circleMarker ) {
            circleMarker.setCenter(latlng);
        } else {
            circleMarker = new ns.Circle({
                center : latlng,
                radius : accuracy, 
                map : map,

                fillColor : color,
                fillOpacity : 0.25,
                strokeColor : color,
                strokeOpacity : 0.65,
                strokeWeight : 2,
                zIndex : 0
            });
        }
    }

    function success(position) {
        var latlng = new ns.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(latlng);
        map.setZoom(17);
        drawCircleMark(latlng, position.coords.accuracy, "#0072f9");
    }

    function error(err) {
        switch(err.code) {
            case err.PERMISSION_DENIED:
                alert('Position failed. Please check that location is enabled');
                break;

            case err.TIMEOUT:
            case err.POSITION_UNAVAILABLE:
                alert('Position failed. This can happen if you are indoors');
                breakk;

            default:
                alert('Unknown Error Occurred');
        }
    }

    function refreshLocation() {
        if ( typeof window.navigator.geolocation !== 'undefined' ) {
            window.navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    $('document').ready(function() {
        init();

        $('#btn-find').click(refreshLocation);

    });


}(this));

