var Record = require('../record');
var assert = require('assert');

describe('record', function () {
    var spice = new Record('Spice Girls', 'Spice', 10);
  it('should have an artist', function () {
    assert.equal('Spice Girls', spice.artist);
  });
  it('should have title', function () {
    assert.equal('Spice', spice.title);
  });
  it('should have price', function () {
    assert.equal(10, spice.price);
  });
});

describe('record', function () {
    var braveNewWorld = new Record('Iron Maiden', 'Brave New World', 15);
  it('should have an artist', function () {
    assert.equal('Iron Maiden', braveNewWorld.artist);
  });
  it('should have title', function () {
    assert.equal('Brave New World', braveNewWorld.title);
  });
  it('should have price', function () {
    assert.equal(15, braveNewWorld.price);
  });
});
