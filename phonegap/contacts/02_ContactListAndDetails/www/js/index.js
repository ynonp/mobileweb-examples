console.log('start');
var g_deviceReady = false;
var g_q = [];
var g_contacts = {};


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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        $('body').on('pagecontainerbeforeshow', function(event, ui) {
          var toPage = ui.toPage.attr('id');

          if ( toPage === 'home' ) {
            app.getContacts();
          }
          else if ( toPage === 'details' ) {
            console.log('details');
            app.getContactDetails();
          }

        });

    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      g_deviceReady = true;
      if ( g_q.length > 0 ) {
        g_q.forEach(function(f) {
          f();          
        });
        g_q = [];
      }
    },
    // Update DOM on a Received Event
    getContacts: function() {
      if ( ! g_deviceReady ) {
        g_q.push(app.getContacts);
        return;
      }

      var fields = ['displayName', 'phoneNumbers', 'emails'];
      var options = {
        multiple: true
      };
      
      navigator.contacts.find(fields, app.showContacts, app.showError, options);
    },

    showContacts: function(contacts) {
      console.log('found ' + contacts.length + ' contacts');
      var toshow = contacts.
        filter(function(el) { return el.phoneNumbers && el.emails }).
        slice(0,10);
      g_contacts = toshow;

      console.log('done. found: ' + contacts.length + ' contacts');
      var $ul = $('#contact-list');
      
      for ( var i=0; i < toshow.length; i++ ) {
        $ul.append('<li class="list-item">' + 
                     '<a href="details.html?id=' + i + '">' +
                       toshow[i].displayName + 
                     '</a>' +
                   '</li>');
      }

      $ul.listview('refresh');
    },

    getContactDetails: function() {
      var idx = location.href.match(/[?]id=(\d+)/)[1];
      var contact = g_contacts[idx];

      if ( contact ) {
        $('.name').text(contact.displayName);
        $('.email').text(contact.emails[0].value);
        $('.number').text(contact.phoneNumbers[0].value);
      }

    },

    showError: function() {
      alert('onError!');
    }


};






