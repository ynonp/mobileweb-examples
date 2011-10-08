(function(global) {
    
    function init() {
        document.getElementById('name').innerHTML       = device.name;
        document.getElementById('pg-version').innerHTML = device.phonegap;
        document.getElementById('os-name').innerHTML    = device.platform;
        document.getElementById('os-version').innerHTML = device.version;
        document.getElementById('uuid').innerHTML       = device.uuid;
    }
    
    document.addEventListener('deviceready', init, false);
}(this));