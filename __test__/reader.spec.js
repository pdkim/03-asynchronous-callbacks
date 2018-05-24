'use strict';

const reader = require('../lib/reader.js');

describe('Module should succeed', () => {
  xit('by prompting an error when invalid path is used', () => {
    expect(reader()).toBeUndefined();
  });
});
