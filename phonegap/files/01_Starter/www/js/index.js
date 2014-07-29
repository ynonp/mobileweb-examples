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

var LocalStorage = function() {
  this.save = function(name, value) {
    window.localStorage.setItem(name, value);
  };

  this.load = function(name) {
    var result = window.localStorage.getItem(name);
    return result;
  };
};


document.addEventListener('deviceready', function() {
  // on device ready
}, false);

$(function() {
  // on document load

  var storage = new LocalStorage();
  var name = 'buffer.txt';

  $('#btn-save').on('click', function() {
    var value = $('#buffer').val();
    storage.save(name, value);
  });
  $('#btn-restore').on('click', function() {
    var value = storage.load(name);
    $('#buffer').val(value);
  });
});







