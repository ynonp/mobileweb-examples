/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*global device */
/*global Media*/
var pushNotification;


function successHandler (result) {
    alert('result = ' + result);
}

function errorHandler (error) {
    alert('error = ' + error);
}

function tokenHandler (result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    window.token = result;
    alert('device token = ' + result);
}


// iOS
function onNotificationAPN (event) {
    if ( event.alert )
    {
        $('#app-status-ul').append("<li>" + event.alert + "</li>");
    }

    if ( event.sound )
    {
        var snd = new Media(event.sound);
        snd.play();
    }

    if ( event.badge )
    {
        pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
    }
}

document.addEventListener('deviceready', function() {
  // on device ready
 pushNotification = window.plugins.pushNotification;
  $("#app-status-ul").append('<li>registering ' + device.platform + '</li>');
  if ( device.platform === 'android' || device.platform === 'Android' || device.platform === "amazon-fireos" ){

      pushNotification.register(
        successHandler,
        errorHandler,
        {
            "senderID":"replace_with_sender_id",
            "ecb":"onNotification"
        });
  } else {
      pushNotification.register(
        tokenHandler,
        errorHandler,
        {
            "badge":"true",
            "sound":"true",
            "alert":"true",
            "ecb":"onNotificationAPN"
        });
  }



}, false);

$(function() {
  // on document load
});


