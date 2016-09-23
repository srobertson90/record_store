var assert = require('assert');
var Record = require('../record');

describe('Record', function(){

  var test;
  var empty;

  before(function(){
    test = new Record({id: "00523", artist: "Amon Amarth",title: "Sutur Rising", price: 8.99});
    empty = new Record();
  });

  it('should have an album id', function(){
    assert.equal("00523", test.id);
  });

});