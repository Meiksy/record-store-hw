var Store = require('../store');
var assert = require('assert');

describe('Store', function () {
  var recordStore = new Store('Keiths Music Store', 'Edinburgh');

  it('should have name', function () {
    assert.equal('Keiths Music Store', recordStore.name);
  });
  it('should have city', function () {
    assert.equal('Edinburgh', recordStore.city);
  });
  // it('should have inventory', function () {
  //   assert.equal(inventory, recordStore.inventory);
  // });


});