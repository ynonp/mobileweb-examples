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
console.log('--- start ---');

function errorHandler(e) {
  var msg = '';
  console.log('--- errro');

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}



var FSStorage = function() {
  var libraryPath;
  window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dirEntry) {
    libraryPath = dirEntry;
  }, errorHandler);

  this.save = function(name, value) {
    console.log('--- save');
    libraryPath.getFile(name, {create: true}, function(fileEntry) {
      // Create a FileWriter object for our FileEntry (log.txt).
      fileEntry.createWriter(function(fileWriter) {

        fileWriter.onwriteend = function() {
          console.log('Write completed.');
        };

        fileWriter.onerror = function(e) {
          console.log('Write failed: ' + e.toString());
        };

        // Create a new Blob and write it to log.txt.
        var blob = new Blob([value], {type: 'text/plain'});

        fileWriter.write(blob);
        console.log('writing blob...');

      }, errorHandler);

    }, errorHandler);
  };


  this.load = function(name, cb) {
    libraryPath.getFile(name, {}, function(fileEntry) {

      // Get a File object representing the file,
      // then use FileReader to read its contents.
      fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function() {
          cb(this.result);
        };

        reader.readAsText(file);
      }, errorHandler);

    }, errorHandler);

  };


};

var LocalStorage = function() {
  this.save = function(name, value) {
    window.localStorage.setItem(name, value);
  };

  this.load = function(name, cb) {
    var result = window.localStorage.getItem(name);
    setTimeout(function() {
      cb(result);
    }, 0);
  };
};


var storage;

document.addEventListener('deviceready', function() {
  // on device ready
  storage = new FSStorage();
  $('button').removeAttr('disabled');
}, false);

$(function() {
  // on document load

  var name = 'buffer.txt';

  $('#btn-save').on('click', function() {
    var value = $('#buffer').val();
    storage.save(name, value);
  });
  $('#btn-restore').on('click', function() {
    storage.load(name, function(value) {
      $('#buffer').val(value);
    });
  });
});







