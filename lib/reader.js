'use strict';

const fs = require('fs');

module.exports = exports = (arr, callback) => {

  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    fs.readFile(arr[i], (err, data) => {
      if (err) {
        callback(err);
      } else {
        newArr[i] = data.toString().trim();
        if (newArr.length === arr.length) {
          callback(undefined, newArr);
        }
      }
    });
  }
};

