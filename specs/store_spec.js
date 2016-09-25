var assert = require('assert');
var Store = require('../store');

describe('Store', function(){

  var testStore;
  var genericStore;

  before(function(){
    testStore = new Store({company: "Harveys", city: "Glasgow", balance: 2147});
    genericStore = new Store();
  });

  it('should have an associated company', function(){
    assert.equal("Harveys", testStore.company);
  });

  it('should have a city', function(){
    assert.equal("Glasgow", testStore.city);
  });

});