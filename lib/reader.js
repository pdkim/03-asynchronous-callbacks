'use strict';

const fs = require('fs');

module.exports = exports = (file, callback) => {
  for(let i = 0; i < file.length; i++) {
    fs.readFile(file[i], (err, data) => {
      if(err) {callback(err);}
      else{ callback(undefined, data.toString().trim()); }
    });
  }
};

