var token = 'write_device_token_here';

var apn = require('apn');
var options = {
  cert: 'replace with a path to your cert.pem file',
  key: 'replace with a path to your key.pem file',
  passphrase: "1234"
};

var apnConnection = new apn.Connection(options);

var myDevice = new apn.Device(token);
var note = new apn.Notification();

note.badge = 3;
note.alert = "You have a new message";
note.payload = {'messageFrom': 'Caroline'};

apnConnection.pushNotification(note, myDevice);

