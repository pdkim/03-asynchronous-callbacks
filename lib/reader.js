'use strict';

const fs = require('fs');

module.exports = exports = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    fs.readFile(arr[i], (err, data) => {
      if(err) {callback(err);}
      else{ callback(undefined, data.toString().trim()); }
    });
  }
};

