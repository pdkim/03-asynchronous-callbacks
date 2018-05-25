'use strict';

const fs = require('fs');

module.exports = exports = (arr, callback) => {

  var newArr = [];

  arr.forEach(file => {
    fs.readFile(file, (err, data) => {
      if(err) {
        callback(err);
      } else {
        newArr.push(data.toString().trim());
        if(newArr.length === arr.length) {
          callback(undefined, newArr);
        }
      }
    });
  });
};
//   for (let i = 0; i < arr.length; i++) {
//     fs.readFile(arr[i], (err, data) => {
//       if (err) {
//         callback(err);
//       } else {
//         newArr[i] = data.toString().trim();
//         if (newArr.length === arr.length) {
//           callback(undefined, newArr);
//         }
//       }
//     });
//   }
// };

