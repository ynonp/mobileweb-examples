/**
 * Parking App Solution
 *
 * Lab From: ynonperek.com
 */

var LatLng = function(lat, lng) {
  var self = {
    lat: lat,
    long: lng,
    toString: function() {
      return this.lat + ',' + this.long;
    }
  };
  return self;
};

var Finder = function() {

  var save_location = function( pos ) {
    var latlng = { lat: pos.coords.latitude, long: pos.coords.longitude };
    localStorage.setItem('parking', JSON.stringify(latlng));
  };

  var on_error = function( err ) {
    alert( err.message );
  };

  var show_map_to_parked = function( pos ) {
    var url = 'http://maps.apple.com/?saddr=' + new LatLng(pos.coords.latitude, pos.coords.longitude) +
              '&daddr=' + self.parkedAt;

    window.location.href = url;
  };

  var self = { };

  self.saveLocation = function( ) {
    navigator.geolocation.getCurrentPosition( save_location, on_error, { enableHighAccuracy: true } );
  };

  self.showRouteToParking = function( ) {
    var oldValue = localStorage.getItem('parking');
    if ( oldValue != null ) {
      var latlng = JSON.parse( oldValue );
      self.parkedAt = new LatLng( latlng.lat, latlng.long );
      navigator.geolocation.getCurrentPosition( show_map_to_parked, on_error, { enableHighAccuracy: true });
    }
  };
  return self;
};

var parked_link = document.querySelector('#btn-parked');
var find_link   = document.querySelector('#btn-find');

var finder = new Finder();
parked_link.addEventListener('click', finder.saveLocation );
find_link.addEventListener('click', finder.showRouteToParking );