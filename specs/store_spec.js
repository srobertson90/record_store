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

  it('should start with an empty array', function(){
    assert.deepEqual([], testStore.records);
  });

  it('should have a balance', function(){
    assert.equal(2147, testStore.balance);
  });

  it('should be able to add a record', function(){
    testStore.addRecord({artist: "Amon Amarth",title: "Sutur Rising", price: 8.99});
    assert.deepEqual([{id: "00001", artist: "Amon Amarth",title: "Sutur Rising", price: 8.99}], testStore.records);
  });

  it('should have a default company', function(){
    assert.equal("Generic", genericStore.company);
  });

  it('should have a default city', function(){
    assert.equal("Somewhere", genericStore.city);
  });

  it('should have a default balance', function(){
    assert.equal(0, genericStore.balance);
  });

  it('can find record by title', function(){
    assert.deepEqual({id: "00001", artist: "Amon Amarth",title: "Sutur Rising", price: 8.99}, testStore.findByTitle("Sutur Rising"));
  });

  it('adds to balance when selling a record', function(){
    testStore.sellRecord(testStore.records[0]);
    assert.equal(2155.99, testStore.balance);
  });

  it('can list records', function(){
    assert.deepEqual(['Sutur Rising - Amon Amarth'], testStore.listRecords());
  });

});