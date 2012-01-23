window.onload = function() {
  var btn = document.querySelector('button');
  var panel = document.querySelector('div.location');
  var ns = google.maps;
  
  var map, circleMarker;

  var init_map = function() {
    var latlng = new ns.LatLng(0, 0);

    var opts = {
        zoom             : 2,
        center           : latlng,
        disableDefaultUI : true,
        scaleControl     : true,
        mapTypeId        : ns.MapTypeId.ROADMAP
    };

    map = new ns.Map(document.getElementById("map"), opts);
  };

  var drawCircleMark = function(latlng, accuracy, color) {
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
    };



  var location_error = function(err) {
    panel.innerHTML = err.message;  
  };  
  
  var show_location = function(position) {
    var coords = position.coords;
    var content = coords.latitude + "; " + coords.longitude;
    var latlng = new ns.LatLng(position.coords.latitude, position.coords.longitude);
    
    panel.innerHTML = content;
    map.setCenter(latlng);
    map.setZoom(17);
    drawCircleMark(latlng, position.coords.accuracy, "#0072f9");    
  };
  
  var get_location = function() {
    panel.innerHTML = '<img src="load.gif" />';
    navigator.geolocation.getCurrentPosition(
                show_location,
                location_error);
  };

  init_map();  
  btn.addEventListener('click', get_location, false);
};