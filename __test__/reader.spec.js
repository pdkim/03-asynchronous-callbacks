'use strict';

const reader = require('../lib/reader.js');

describe('Reader module', () => {

  //first
  xit('should prompt an error when invalid path is used', (done) => {
    reader([`${__dirname}missing.txt`], (err) => {
      expect(err).not.toBeUndefined();
      done();
    });
  });

  //second
  xit('should prompt error of even one file is invalid path', (done) => {
    reader([__dirname + '/../data/almonds.txt', 'missing.txt'], (err) => {
      expect(err).not.toBeUndefined();
      done();
    });
  });

  //third
  it('should return data from one filepath', (done) => {
    const expected = 'i am a nut';
    reader([__dirname + '/../data/almonds.txt'], (err, contents) => {
      expect(err).toBeUndefined();
      const actual = contents.toString();
      expect(actual).toBe(expected);
      done();
    });
  });

  //fourth
  xit('should return file contents for multiple files', (done) => {
    let files = [];
    for (let items of ['corn', 'almonds', 'berries']) {
      files.push(__dirname + '/../data/' + items + '.txt');
    }

    let actual, expected;

    reader(files, (err, contents) => {
      expected = true;
      actual = contents[0].startsWith('corn');
      expect(actual).toBe(expected);

      expect(err).toBeUndefined();
      expected = 'i am a nut';
      actual = contents[1];
      expect(actual).toBe(expected);

      expected = 'i am a berry';
      actual = contents[2];
      expect(actual).toBe(expected);
    });

    done();
  });
});
