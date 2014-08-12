var token = process.argv[2];
var message = process.argv[3];

if ( ! token || ! message) {
  console.log('Usage: push <device_token> <message>');
  process.exit(1);
}

console.log('sending ' + message + ' to device: ' + token);

var apn = require('apn');
var options = {
  cert: 'path to cert.pem file',
  key: 'path to key.pem file',
  passphrase: "1234"
};

var apnConnection = new apn.Connection(options);

var myDevice = new apn.Device(token);
var note = new apn.Notification();

note.badge = 3;
note.alert = message;
note.payload = {'messageFrom': 'Caroline'};

apnConnection.pushNotification(note, myDevice);

