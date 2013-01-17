/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 1/17/13
 * Time: 5:42 PM
 * To change this template use File | Settings | File Templates.
 */


var Finder = function() {
  var self = {};

  var save_position = function(pos) {
    var latlng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    localStorage.setItem( 'position', JSON.stringify(latlng) );
    alert('Location Saved !');
  };

  var report_error = function(err) {
    alert( err.message );
  };

  var navigate_to_position = function( pos ) {
    var url = 'http://maps.apple.com/?saddr=' +
              pos.coords.latitude + ',' + pos.coords.longitude +
              '&daddr=' + self.latlng.lat + ',' + self.latlng.lng;

    console.log( url );
    console.dir( pos );
    console.dir( self.latlng );

    // window.location.href = url;
  };

  self.parked = function() {
    navigator.geolocation.getCurrentPosition(
      save_position, report_error, { enableHighAccuracy: true } );
  };

  self.navigate = function() {
    var savedValue = localStorage.getItem('position');
    if ( savedValue != null ) {
      self.latlng = JSON.parse( savedValue );
      navigator.geolocation.getCurrentPosition(
        navigate_to_position, report_error, { enableHighAccuracy: true });
    } else {
      alert('No saved location');
    }
  };

  return self;
};

var finder = new Finder();

var btn_parked_here = document.querySelector('#btn-parked');
var btn_navigate    = document.querySelector('#btn-find');

btn_parked_here.addEventListener('click', finder.parked );
btn_navigate.addEventListener('click', finder.navigate );

